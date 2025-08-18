import {SeeMoreBtn} from "../Input/SeeMoreBtn.jsx";
import {TransactionCard} from "./TransactionCard.jsx";
import {formatNumber} from "../../utils/helper.js";
import moment from "moment";

export const IncomesTransaction = ({incomes, onSeeMore}) => {
    return (<div className="card mt-4">
        <div className="flex items-center justify-between">
            <h5 className="text-xl">Revenus récent</h5>
            <SeeMoreBtn onSeeMore={onSeeMore}/>
        </div>
        <div className="grid grid-cols-1 mt-4">
            {incomes?.slice(0,5)?.map((income) => {
                return <TransactionCard
                    key={income?._id}
                    title={income?.source}
                    date={moment(income?.date).locale('fr').format("Do MMMM YYYY")}
                    icon={income?.icon}
                    amount={formatNumber(income?.amount)}
                    type={"income"}
                />
            })}
        </div>
    </div>)
}