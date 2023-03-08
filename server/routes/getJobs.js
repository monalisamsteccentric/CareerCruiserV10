
import express from 'express';
import getJobs from '../controllers/getJobs.js';


let router = express.Router();


router.get('/', getJobs);
  

export default router;