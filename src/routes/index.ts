import express from "express";
import userRouter from './user';
import masterDataRouter from './masterData';
import transactionRouter from './transaction';
import reportRouter from './report';

const router = express.Router();
router.use('/api/users', userRouter);
router.use('/api/masterData', masterDataRouter);
router.use('/api/transactions', transactionRouter);
router.use('/api/reports', reportRouter);

export default router;