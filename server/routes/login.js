import express, { Router }  from "express";
import login from "../controllers/login.js";


let router = express.Router();

router.post('/', login)


export default router; 