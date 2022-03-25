import express from 'express';

import { updateStates } from '../controllers/updateStates.js';

const router = express.Router();

router.patch('/', updateStates);

export default router;