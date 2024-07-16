

import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import router from "./routes/index.js";
import connectDatabase from "./config/db.js";
dotenv.config();
//including mongoDb
connectDatabase();

const app = express();
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(router);
 
app.listen(5000, ()=> console.log('Server running at port 5000')); 

