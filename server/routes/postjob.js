import express from 'express';
import  postJob  from '../controllers/postJob.js';



let router = express.Router();


router.post('/', postJob);
  

export default router;