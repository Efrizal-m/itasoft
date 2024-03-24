import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../database/models/User'; // Assuming you have a User model defined
import { vars } from "../global_config/vars";

class UserController {
  async login(req: Request, res: Response) {
    const { name, password } = req.body;

    try {
      // Cari pengguna berdasarkan nama pengguna
      const user = await User.findOne({ where: { name } });
      if (!user) {
        return res.status(404).json({ message: 'Name not found' });
      }

      // Periksa kecocokan kata sandi
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid password' });
      }

      // Buat token JWT
      const token = jwt.sign({ userId: user.id }, vars.JWT_SECRET, { expiresIn: '1h' });

      // Kirim token sebagai respons
      res.json({ token });
    } catch (err:any) {
      res.status(500).json({ message: err.message });
    }
  }
}

export default UserController;
