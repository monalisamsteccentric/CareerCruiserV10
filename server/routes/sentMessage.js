import express from 'express';
import sentmessage from '../controllers/sentMessage.js';
const router = express.Router();



router.get('/', sentmessage);

export default router;
