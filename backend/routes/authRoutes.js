import express from "express";
import {login, register, getUser} from "../controllers/authController.js";
import {protect} from "../middleware/authMiddleware.js";

export const authRoutes = express.Router()

authRoutes.post('/register', register)
authRoutes.post('/login', login)
authRoutes.get('/getUser', protect, getUser)
