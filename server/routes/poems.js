import express from 'express';

import { getPoems } from '../controllers/poems.js'
import { createPoem } from '../controllers/poems.js'
import { getPoem } from '../controllers/poems.js'

const router = express.Router();

r//outer.get('/', getPoems);

//router.get('/:id', getPoem);

//router.post('/', createPoem);

export default router;