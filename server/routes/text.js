import express from 'express';

import { getText } from '../controllers/text.js';

const router = express.Router();

router.get('/', getText);

export default router;