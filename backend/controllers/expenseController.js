import {Expense} from "../models/Expense.js";
import XLSX from "xlsx";
import fs from "fs";

export const addExpense = async (req, res) => {
    try {
        const userId = req.user.id
        const {amount, category, date, icon} = req.body

        if(!amount || !category) {
            return res.status(400).json({
                success: false,
                message: "Veuillez entrez toutes les informations requises !"
            })
        }

        const newExpense = await Expense.create({
            userId,
            amount,
            category,
            date: date || new Date(),
            icon
        })

        return res.status(201).json({
            success: true,
            newExpense
        })

    } catch (e) {
        return res.status(500).json({
            success: false,
            message: e.message
        })
    }
}

export const getAllExpenses = async (req, res) => {
    try {
        const userId = req.user.id
        const expenses = await Expense.find({userId}).sort({date: -1})

        return res.status(201).json({
            success: true,
            expenses
        })
    } catch (e) {
        return res.status(500).json({
            success: false,
            message: e.message
        })
    }
}

export const deleteExpense = async (req, res) => {
    const userId = req.user.id
    const expenseId = req.params.id

    try {
        const deletedExpense = await Expense.findOne({userId, _id: expenseId})
        if(!deletedExpense) {
            return res.status(400).json({
                success: false,
                message: "Cette dépense n'existe pas ou ne vous appartient pas ! Veuillez recommencez avec une autre."
            })
        }

        await Expense.deleteOne({userId, _id: expenseId})

        return res.json({
            success: true,
            deletedExpense
        })

    } catch (e) {
        console.log(e)
        return res.status(500).json({
            success: false,
            message: e.message
        })
    }
}

export const downloadExcelExpenses = async (req, res) => {
    try {

        const userId = req.user.id
        const expenses = await Expense.find({userId})

        const data = expenses.map((expense) => ({
            Category: expense.category,
            Date: expense.date,
            Amount: expense.amount
        }))

        const wb = XLSX.utils.book_new()
        const expenseSheet = XLSX.utils.json_to_sheet(data)

        XLSX.utils.book_append_sheet(wb, expenseSheet, "Expenses")

        const filename = 'finhub-expenses-' + Date.now() + '.xlsx'
        XLSX.writeFile(wb, filename)

        res.download(filename, (err) => {
            if(err) throw err
            fs.unlinkSync(filename)
        })
    } catch (e) {
        return res.status(500).json({
            success: false,
            message: e.message
        })
    }
}