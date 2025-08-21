import {useState} from "react";
import {CustomEmojiPicker} from "../Input/CustomEmojiPicker.jsx";
import {Input} from "../Input/Input.jsx";

export const AddExpenseForm = ({addExpense}) => {
    const [expense, setExpense] = useState({
        amount: 0,
        category: "",
        date: "",
        icon:""
    })

    function handleChange(key, value) {
        setExpense({...expense, [key]: value})
    }

    function handleSubmit(e) {
        e.preventDefault()
        addExpense(expense)
    }

    return(
        <form className="flex flex-col gap-3"
            onSubmit={handleSubmit}
        >
            <CustomEmojiPicker
                icon={expense.icon}
                onSelect={(selectedIcon) => handleChange("icon", selectedIcon)}
            />
            <Input
                id="category"
                label="Category"
                placeholder="Courses, vêtements, Factures..."
                type="text"
                onChange={({target}) => handleChange("category", target.value)}
            />
            <Input
                id="amount"
                label="Montant"
                placeholder="25 000"
                type="number"
                onChange={({target}) => handleChange("amount", target.value)}
            />
            <Input
                id="date"
                label="Entrez le date"
                type="date"
                onChange={({target}) => handleChange("date", target.value)}
            />
            <button className="btn-primary">
                Ajouter
            </button>
        </form>
    )
}