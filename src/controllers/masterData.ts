import { Request, Response } from 'express';
import MasterData from '../database/models/MasterData'; // Assume MasterData model is defined

class MasterDataController {
    async getAll(req: Request, res: Response) {
      try {
        const masterData = await MasterData.findAll();
        res.json(masterData);
      } catch (err:any) {
        res.status(500).json({ message: err.message });
      }
    }
  
    async getById(req: Request, res: Response) {
      try {
        const masterData = await MasterData.findByPk(req.params.id);
        if (!masterData) {
          return res.status(404).json({ message: 'Master data not found' });
        }
        res.json(masterData);
      } catch (err:any) {
        res.status(500).json({ message: err.message });
      }
    }
  
    async create(req: Request, res: Response) {
      const { name, description } = req.body;
      try {
        const newMasterData = await MasterData.create({
          name,
          description
        });
        res.status(201).json(newMasterData);
      } catch (err:any) {
        res.status(400).json({ message: err.message });
      }
    }
  
    async update(req: Request, res: Response) {
      try {
        const masterData = await MasterData.findByPk(req.params.id);
        if (!masterData) {
          return res.status(404).json({ message: 'Master data not found' });
        }
        const { name, description } = req.body;
        await masterData.update({
          name,
          description
        });
        res.json(masterData);
      } catch (err:any) {
        res.status(400).json({ message: err.message });
      }
    }
  
    async delete(req: Request, res: Response) {
      try {
        const masterData = await MasterData.findByPk(req.params.id);
        if (!masterData) {
          return res.status(404).json({ message: 'Master data not found' });
        }
        await masterData.destroy();
        res.json({ message: 'Master data deleted' });
      } catch (err:any) {
        res.status(500).json({ message: err.message });
      }
    }
}

export default MasterDataController;