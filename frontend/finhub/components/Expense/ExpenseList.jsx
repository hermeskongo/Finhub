import {TransactionCard} from "../Dashboard/TransactionCard.jsx";
import {formatNumber} from "../../utils/helper.js";
import moment from "moment";
import {LuDownload} from "react-icons/lu";

export function ExpenseList({expenses, onDelete, onDownload}) {

    return(
    <div className="card">
        <div className="flex items-center justify-between gap-3">
            <h3 className="text-xl">Historique de vos revenus</h3>
            <button
                className="py-3 px-4 bg-gray-200 rounded-md flex items-center justify-center gap-3 hover:cursor-pointer"
                onClick={onDownload}
            >
                <LuDownload/>
                <p>Télécharger</p>
            </button>
        </div>
        <div className="p-6 mt-4 grid md:grid-cols-2 md:gap-2">
            {expenses.map((expense, index) => {
                return <TransactionCard
                    key={index}
                    title={expense.category}
                    date={moment(expense.date).locale('fr').format("Do-MM-YYYY")}
                    type="expense"
                    amount={formatNumber(expense.amount)}
                    hideDeleteBtn={false}
                    icon={expense.icon}
                    onDelete={() => onDelete(expense._id)}
                />
            })}
        </div>
    </div>
)
}