import { Request, Response } from 'express';
import Transaction from '../database/models/Transaction'; // Assuming you have a Transaction model defined

class TransactionController {
  async getAll(req: Request, res: Response) {
    try {
      const transactions = await Transaction.findAll();
      res.json(transactions);
    } catch (err:any) {
      res.status(500).json({ message: err.message });
    }
  }

  async getById(req: Request, res: Response) {
    try {
      const transaction = await Transaction.findByPk(req.params.id);
      if (!transaction) {
        return res.status(404).json({ message: 'Transaction not found' });
      }
      res.json(transaction);
    } catch (err:any) {
      res.status(500).json({ message: err.message });
    }
  }

  async create(req: Request, res: Response) {
    const { type, description, date, userId } = req.body;
    try {
      const newTransaction = await Transaction.create({
        type,
        description,
        date,
        userId
      });
      switch (type) {
        case 'penjualan':
            
            break;
        case 'pembelian':
            
            break;
        case 'peminjaman':
            
            break;
        default:
            break;
      }
      res.status(201).json(newTransaction);
    } catch (err:any) {
      res.status(400).json({ message: err.message });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const transaction = await Transaction.findByPk(req.params.id);
      if (!transaction) {
        return res.status(404).json({ message: 'Transaction not found' });
      }
      const { type, description, date, userId } = req.body;
      await transaction.update({
        type,
        description,
        date,
        userId
      });
      res.json(transaction);
    } catch (err:any) {
      res.status(400).json({ message: err.message });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const transaction = await Transaction.findByPk(req.params.id);
      if (!transaction) {
        return res.status(404).json({ message: 'Transaction not found' });
      }
      await transaction.destroy();
      res.json({ message: 'Transaction deleted' });
    } catch (err:any) {
      res.status(500).json({ message: err.message });
    }
  }
}

export default TransactionController;
