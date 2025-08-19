import {useState} from "react";
import {Input} from "../Input/Input.jsx";
import {CustomEmojiPicker} from "../Input/CustomEmojiPicker.jsx";

export const AddIncomeForm = ({onAddIncome}) => {

    const [income, setIncome] = useState({
        source: "",
        amount: 0,
        date: "",
        icon: ""
    })

    /**
     *
     * @param {string} key
     * @param value
     */
    function handleIncomeChange(key, value) {
        setIncome({...income, [key]: value})
    }

    function handleSubmit(e){
        e.preventDefault()
        onAddIncome(income)
    }

    return(
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <CustomEmojiPicker
                icon={income.icon}
                onSelect={(selectedIcon) => handleIncomeChange("icon", selectedIcon)}
            />
            <Input
                label="Source"
                placeholder="Freelance, salaire, investissement..."
                type="text"
                id="email"
                onChange={({ target }) => handleIncomeChange("source", target.value)}
            />
            <Input
                label="Montant"
                placeholder="250 000"
                type="number"
                id="amount"
                onChange={({ target }) => handleIncomeChange("amount", target.value)}
            />
            <Input
                label="Date"
                type="date"
                id="date"
                onChange={({ target }) => handleIncomeChange("date", target.value)}
            />
            <button className="btn-primary" type="submit">Ajouter</button>
        </form>
    )

}