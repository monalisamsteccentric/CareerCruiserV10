import express from 'express'
import inboxMessage from '../controllers/inboxMessage.js';
const router = express.Router();


// Route for fetching all messages for a specific recipient
router.get('/', inboxMessage);

export default router;
