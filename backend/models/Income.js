import mongoose from "mongoose";

const IncomeSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    amount: {
        type: Number
    },
    source: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    },
    icon: {
        type: String,
        default: ""
    }
}, {timestamps: true})

export const Income = mongoose.model("Income", IncomeSchema)