import express from 'express';
import { getItems, createItem } from '../controllers/itemController.js';

const router = express.Router();

router.get('/teste', getItems);
router.post('/teste2', createItem);

export default router;
