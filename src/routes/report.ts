import express from 'express';
import ReportController from '../controllers/report';

const router = express.Router();
const reportController = new ReportController();

router.get('/export/pdf', reportController.exportPDF);
router.get('/export/excel', reportController.exportExcel);

export default router;
