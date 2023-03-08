
import express from 'express';
import searchJobs from '../controllers/searchJobs.js';



let router = express.Router();


router.get('/', searchJobs);
  

export default router;