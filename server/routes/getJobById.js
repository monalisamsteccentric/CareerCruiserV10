import express from 'express';
import { getJobById } from '../controllers/getJobById.js';



let router = express.Router();


router.get('/', getJobById);
  

export default router;