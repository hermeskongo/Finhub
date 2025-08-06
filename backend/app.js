import express from "express";
import cors from "cors";
import 'dotenv/config'
import path from "path"
import {connectDB} from "./config/mongodb.js";
import {authRoutes} from "./routes/authRoutes.js";

const app = express()
const port = process.env.PORT || 3000
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


app.listen(port, () => console.log(`Server on: ${port}`))
