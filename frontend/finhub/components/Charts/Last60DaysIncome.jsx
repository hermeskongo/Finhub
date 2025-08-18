import {CustomPie} from "./CustomPie.jsx";
import {useEffect, useState} from "react";

const COLORS = ["#67c9cb", "#FA2C37", "#FF6900"];
export const Last60DaysIncome = ({data, totalAmount}) => {
    const [chartData, setChartData] = useState([])
    const prepareChartData = () => {
        const dataArr = data?.map((item) => ({
            amount: item.amount,
            name: item.source
        }))
        setChartData(dataArr)
    }

    useEffect(() => {
        prepareChartData()
    }, [data])

    return (<div className="card mt-4">
        <div className="flex items-center justify-center">
            <h5 className="text-xl">Vos Revenus des 60 derniers jours</h5>
        </div>
        <CustomPie
            data={chartData}
            label={"Revenus"}
            colors={COLORS}
            totalAmount={totalAmount}
            showLegend={false}
        />
    </div>
    )
}