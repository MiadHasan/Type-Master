import express from 'express';
import { signup, createUser } from '../controllers/signup.js';

const router = express.Router();

router.get('/', signup);
router.post('/', createUser);

export default router;