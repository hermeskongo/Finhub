import {TransactionCard} from "../Dashboard/TransactionCard.jsx";
import {formatNumber} from "../../utils/helper.js";
import moment from "moment";

export function ExpenseList({expenses, onDelete}) {

    return(
    <div className="card mt-10 mb-3 grid grid-cols-2 gap-3">
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
)
}