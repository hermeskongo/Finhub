import mongoose from "mongoose";

const ExpenseSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    amount: {
        type: Number
    },
    category: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    },
    icon: {String}
}, {timestamps: true})

export const Expense = mongoose.model("Expense", ExpenseSchema)