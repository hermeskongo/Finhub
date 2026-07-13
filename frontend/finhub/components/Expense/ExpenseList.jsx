import {TransactionCard} from "../Dashboard/TransactionCard.jsx";
import {formatNumber} from "../../utils/helper.js";
import moment from "moment";
import {LuDownload} from "react-icons/lu";

export function ExpenseList({expenses, onDelete, onDownload}) {

    return(
    <div className="card">
        <div className="flex items-center justify-between gap-3">
            <h3 className="text-xl font-semibold tracking-tight">Historique de vos dépenses</h3>
            <button
                className="rounded-xl border border-[#334137] bg-[#182019] px-4 py-3 text-[#c4d0c6] transition hover:border-[#b8f36b] hover:text-[#b8f36b] hover:cursor-pointer flex items-center justify-center gap-3"
                onClick={onDownload}
            >
                <LuDownload/>
                <p>Télécharger</p>
            </button>
        </div>
        <div className="mt-4 grid grid-cols-1 gap-1 p-2 sm:p-4 md:grid-cols-2 md:gap-2">
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
