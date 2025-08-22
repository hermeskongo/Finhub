import express from "express";
import {protect} from "../middleware/authMiddleware.js";
import {
    addExpense,
    deleteExpense,
    downloadExcelExpenses,
    getAllExpenses
} from "../controllers/expenseController.js";

export const expenseRoutes = express.Router()

expenseRoutes.post('/add', protect, addExpense)
expenseRoutes.get('/all', protect, getAllExpenses)
expenseRoutes.get('/download', protect, downloadExcelExpenses)
expenseRoutes.delete('/delete/:id', protect, deleteExpense)