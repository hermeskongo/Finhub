import CustomLineCharts from "../Charts/CustomLineCharts.jsx";
import {LuPlus} from "react-icons/lu";

export const ExpenseOverview = ({data, addExpense}) => {
    return (<div className="card py-3 px-4 mt-1">
        <div className="py-3 px-4 mb-5 flex items-center justify-between">
            <div className="flex flex-col items-start justify-center gap-4">
                <h2 className="text-2xl font-bold">Aperçu de vos dépenses</h2>
                <p className="text-gray-500">Suivez vos dépenses au fil du temps et optimisées les !</p>
            </div>
            <button
                className="add-btn"
                onClick={addExpense}
            >
                <LuPlus/>
                Ajouter
            </button>
        </div>
        <CustomLineCharts data={data}/>
    </div>)
}