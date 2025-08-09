import {Income} from "../models/Income.js";
import XLSX from "xlsx"
import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const addIncome = async (req, res) => {
    const userId = req.user.id

    try {
        const {icon, source, amount, date} = req.body

        if(!source || !amount) {
            return res.status(400).json({
                success: false,
                message: "Veuillez entrer toutes les informations requises"
            })
        }

        const newIncome = await Income.create({
            userId,
            source,
            icon,
            amount,
            date: date || new Date()
    })

        return res.status(201).json({
            success: true,
            message: "Income added successfully",
            newIncome
        })

    } catch (e) {
        return res.status(500).json({
            success: false,
            message: e.message
        })
    }
}

export const getAllIncomes = async (req, res) => {
    const userId = req.user.id

    try {
        const incomes = await Income.find({userId}).sort({date: -1})
        return res.json({
            success: false,
            incomes
        })

    } catch (e) {
        return res.status(500).json({
            success: false,
            message: e.message
        })
    }
}

export const deleteIncome = async (req, res) => {
    const userId = req.user.id
    const incomeId = req.params.id
    try {
        const deletedIncome = await Income.findOne({userId, _id:incomeId})

        if(!deletedIncome) {
            return res.status(401).json({
                success: false,
                message: "Revenu introuvable ou non autorisé !"
            })
        }

        await Income.deleteOne({userId, _id: incomeId})

        return res.json({
            success: true,
            deletedIncome
        })
    } catch (e){
        return res.status(500).json({
            success: false,
            message: e.message
        })
    }
}

export const downloadExcelIncomes = async (req, res) => {
    const exportDir = path.join(__dirname, "exports");

    if (!fs.existsSync(exportDir)) {
        fs.mkdirSync(exportDir, { recursive: true });
    }

    try {

        const userId = req.user.id
        const incomes = await Income.find({userId}).lean().select("amount source date -_id")


        const incomesSheet = XLSX.utils.json_to_sheet(incomes)

        const workbook = XLSX.utils.book_new()
        XLSX.utils.book_append_sheet(workbook, incomesSheet, "Incomes")

        const filepath = path.join(__dirname, "exports", "incomes.xlsx")

        XLSX.writeFile(workbook, filepath)

        const fileName = 'finhub-incomes' + '-' + Date.now() + '.xlsx'

        res.download(filepath, fileName, (err) => {
            if(err) throw err
            fs.unlinkSync(filepath)
        })

    } catch (e){
        return res.status(500).json({
            success: false,
            message: e.message
        })
    }
}