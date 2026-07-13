import {CustomPie} from "./CustomPie.jsx";

export const FinanceOverview = ({balance, income, expense}) => {

    const COLORS = ["#b8f36b", "#ff7f7f", "#f4b860"];


    const balanceData = [
        {name: "Solde", amount: balance},
        {name: "Dépenses", amount: expense},
        {name: "Revenus", amount: income},
    ]


    return (
        <div className="card">
            <div className="flex items-center justify-center">
                <h5 className="text-xl">Aperçu des finances</h5>
            </div>

            <CustomPie
                data={balanceData}
                colors={COLORS}
                label="Solde"
                totalAmount={balance}
            />
        </div>
    )
}
