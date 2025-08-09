import {Income} from "../models/Income.js";
import {Types} from "mongoose";
import {Expense} from "../models/Expense.js";

export const getDashboardData = async (req, res) => {
    try {
        const userId = req.user.id
        const userObjectId = new Types.ObjectId(userId)

        const expenseTotal = await Expense.aggregate([
            {$match: {userId: userObjectId}},
            {$group: {_id: null, total: {$sum: "$amount"}}}
        ])
        const incomeTotal = await Income.aggregate([
            {$match: {userId: userObjectId}},
            {$group: {_id: null, total: {$sum: "$amount"}}}
        ])

        const last30DaysIncomeTransactions = await customLastTransaction(Income, userId, 30)
        const last60DaysIncomeTransactions = await customLastTransaction(Income, userId, 60)

        const incomeLast60Days = last60DaysIncomeTransactions.reduce((acc, transaction) => acc+transaction.amount, 0)
        const incomeLast30Days = last30DaysIncomeTransactions.reduce((acc, transaction) => acc+transaction.amount, 0)

        const last30DaysExpenseTransactions = await customLastTransaction(Expense, userId, 30)
        const last60DaysExpenseTransactions = await customLastTransaction(Expense, userId, 60)

        const expenseLast60Days = last60DaysExpenseTransactions.reduce((acc, transaction) => acc+transaction.amount, 0)
        const expenseLast30Days = last30DaysExpenseTransactions.reduce((acc, transaction) => acc+transaction.amount, 0)


        const recentTransactions = [
            ...(await Income.find({userId}).sort({date: -1}).limit(5)).map((trxn) => ({
                    ...trxn.toObject({versionKey: false}),
                    type: "income"
                })),
            ...(await Expense.find({userId}).sort({date: -1}).limit(5)).map((trxn) => ({
                ...trxn.toObject({versionKey: false}),
                type: 'expense'
            }))
        ].sort((a, b) => b.date - a.date)


        return res.status(201).json({
            totalBalance: (incomeTotal[0]?.total || 0) - (expenseTotal[0]?.total || 0),
            expenseTotal: (expenseTotal[0]?.total || 0),
            incomeTotal: (incomeTotal[0]?.total || 0),
            last30DaysExpenses: {
                total: expenseLast30Days,
                transactions: last30DaysExpenseTransactions
            },
            last60DaysExpenses: {
                total: expenseLast60Days,
                transactions: last60DaysExpenseTransactions
            },
            last30DaysIncomes: {
                total: incomeLast30Days,
                transactions: last30DaysExpenseTransactions
            },
            last60DaysIncomes: {
                total: incomeLast60Days,
                transactions: last60DaysIncomeTransactions
            },
            recentTransactions
        })

    } catch (e) {
        return res.status(500).json({
            success: false,
            message: e.message
        })
    }
}

async function customLastTransaction(model, userId,period=7) {
    const customDate = new Date(Date.now() - period*24*60*60*1000)

    return await model.find({
        userId,
        date: {$gte: customDate}
    }).sort({date: -1})
}