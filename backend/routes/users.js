import express from 'express';
import { list_Users, add_User, delete_User, update_User } from '../controllers/userController.js';

const router = express.Router();

router.get('/listusers', list_Users);
router.post('/adduser', add_User);
router.post('/updateuser/:id', update_User);
router.delete('/deleteuser/:id', delete_User);

export default router;