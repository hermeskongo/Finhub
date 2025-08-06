import express from "express";
import cors from "cors";
import 'dotenv/config'
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

import {connectDB} from "./config/mongodb.js";
import {authRoutes} from "./routes/authRoutes.js";
import {uploadsDir} from "./config/uploadsDir.js";


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const app = express()
const port = process.env.PORT || 3000
uploadsDir()
connectDB()
app
    .use(cors({
        origin: process.env.CLIENT_URL || '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type', 'Authorization']
    }))
    .use(express.json())
    .use(express.urlencoded({extended: true}))


app
    .use('/api/v1/auth', authRoutes)



app.use("/uploads", express.static(path.join(__dirname, "uploads")))
app.listen(port, () => console.log(`Server on: ${port}`))
