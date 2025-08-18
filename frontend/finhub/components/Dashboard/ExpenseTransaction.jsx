import {FaArrowRight} from "react-icons/fa";
import {TransactionCard} from "./TransactionCard.jsx";
import moment from "moment/moment.js";
import {formatNumber} from "../../utils/helper.js";
import {SeeMoreBtn} from "../Input/SeeMoreBtn.jsx";

export const ExpenseTransaction = ({expenses, onSeeMore}) => {
    return <div className="card mt-4">
        <div className="flex justify-between items-center mb-6">
            <h5 className="text-xl">Dépenses récentes</h5>
            <SeeMoreBtn onSeeMore={onSeeMore}/>
        </div>
        <div>
            {expenses?.slice(0, 5)?.map((expense) => {
                return <TransactionCard
                    key={expense?._id}
                    title={expense?.category}
                    date={moment(expense?.date).locale('fr').format("Do MMMM YYYY")}
                    icon={expense?.icon}
                    amount={formatNumber(expense?.amount)}
                    type={"expense"}
                />
            })}
        </div>
    </div>
}