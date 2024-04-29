import express from 'express';
import  getcreatedjobs  from '../controllers/getcreatedjobs.js';



let router = express.Router();


router.get('/', getcreatedjobs);
  

export default router;