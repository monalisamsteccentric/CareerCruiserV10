import express, { Router }  from "express";
import getUser from "../controllers/getUser.js";


let router = express.Router();

router.post('/', getUser)


export default router; 