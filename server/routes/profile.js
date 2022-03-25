import express from 'express';

import {getStates} from '../controllers/profile.js';

const router = express.Router();

router.post('/', getStates);

export default router;