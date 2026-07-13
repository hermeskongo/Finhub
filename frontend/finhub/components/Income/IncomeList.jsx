import {LuDownload} from "react-icons/lu";
import {TransactionCard} from "../Dashboard/TransactionCard.jsx";
import moment from "moment";
import {formatNumber} from "../../utils/helper.js";

export const IncomeList = ({data, onDownload, onDelete}) => {

    return(<div className="card">
        <div className="flex items-center justify-between gap-3">
            <h3 className="text-xl font-semibold tracking-tight">Historique de vos revenus</h3>
            <button
                className="rounded-xl border border-[#334137] bg-[#182019] px-4 py-3 text-[#c4d0c6] transition hover:border-[#b8f36b] hover:text-[#b8f36b] hover:cursor-pointer flex items-center justify-center gap-3"
                onClick={onDownload}
            >
                <LuDownload/>
                <p>Télécharger</p>
            </button>
        </div>
        <div className="mt-4 grid grid-cols-1 gap-1 p-2 sm:p-4 md:grid-cols-2 md:gap-2">
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
