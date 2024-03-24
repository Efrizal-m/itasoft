import express from 'express';
import MasterDataController from '../controllers/masterData';

const router = express.Router();
const masterDataController = new MasterDataController();

router.get('/', masterDataController.getAll);
router.get('/:id', masterDataController.getById);
router.post('/', masterDataController.create);
router.put('/:id', masterDataController.update);
router.delete('/:id', masterDataController.delete);

export default router;
