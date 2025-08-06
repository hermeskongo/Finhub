import express from "express";
import {login, register, getUser, uploadImg} from "../controllers/authController.js";
import {protect} from "../middleware/authMiddleware.js";
import {upload} from "../middleware/uploadMiddleware.js";

export const authRoutes = express.Router()

authRoutes.post('/register', register)
authRoutes.post('/login', login)
authRoutes.get('/getUser', protect, getUser)
authRoutes.post('/upload-img', upload.single('image'), uploadImg)
