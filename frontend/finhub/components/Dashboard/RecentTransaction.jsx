import {TransactionCard} from "./TransactionCard.jsx";
import {formatNumber} from "../../utils/helper.js";
import moment from "moment";
import {SeeMoreBtn} from "../Input/SeeMoreBtn.jsx";

export const RecentTransaction = ({transactions, onSeeMore}) => {

    return (
        <div className="grid grid-cols-1 card">
            <div className="flex justify-between items-center mb-6">
                <h5 className="text-xl">Transactions récentes</h5>
                <SeeMoreBtn onSeeMore={onSeeMore}/>
            </div>
            <div className="grid grid-cols-1">
                {transactions?.slice(0,5)?.map((transaction) => {
                    return <TransactionCard
                        key={transaction?._id}
                        title={transaction?.type === 'expense' ? transaction?.category : transaction?.source}
                        date={moment(transaction?.date).locale('fr').format("Do MMMM YYYY")}
                        icon={transaction?.icon}
                        amount={formatNumber(transaction?.amount)}
                        type={transaction?.type}
                    />
                })}
            </div>
        </div>
    )
}