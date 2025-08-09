import express from "express";
import {protect} from "../middleware/authMiddleware.js";
import {getDashboardData} from "../controllers/dashboardController.js";

export const dashboardRoutes = express.Router()

dashboardRoutes.get('/getDashboardData', protect, getDashboardData)