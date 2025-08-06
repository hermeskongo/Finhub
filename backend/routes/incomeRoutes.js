import express from "express";
import {protect} from "../middleware/authMiddleware.js";
import {addIncome, deleteIncome, downloadExcelIncomes, getAllIncomes} from "../controllers/incomeController.js";

export const incomeRoutes = express.Router()

incomeRoutes.post('/add', protect, addIncome)
incomeRoutes.get('/all', protect, getAllIncomes)
incomeRoutes.get('/download', protect, downloadExcelIncomes)
incomeRoutes.delete('/delete/:id', protect, deleteIncome)