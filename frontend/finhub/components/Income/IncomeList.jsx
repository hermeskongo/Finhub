import {LuDownload} from "react-icons/lu";
import {TransactionCard} from "../Dashboard/TransactionCard.jsx";
import moment from "moment";
import {formatNumber} from "../../utils/helper.js";

export const IncomeList = ({data, onDownload, onDelete}) => {

    return(<div className="card">
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
            {data.map((income, index) => {
                return <TransactionCard
                    key={index}
                    title={income.source}
                    date={moment(income.date).locale('fr').format('Do-MM-YYYY')}
                    type="income"
                    amount={formatNumber(income.amount)}
                    icon={income.icon}
                    hideDeleteBtn={false}
                    onDelete={() => onDelete(income._id)}
                />
            })}
        </div>
    </div>)
}