import express from "express";
import {register} from "../controllers/authController.js";

export const authRoutes = express.Router()

authRoutes.post('/register', register)
