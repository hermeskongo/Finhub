import {useEffect, useState} from "react";
import { normalizeData} from "../../utils/helper.js";
import {CustomBarChart} from "./CustomBarChart.jsx";

export const Last30DaysExpenses = ({data}) => {
    const [chartData, setChartData] = useState([])
    useEffect(() => {
        const result = normalizeData(data)
        setChartData(result)
        return () => {}
    }, [data])

    return <div className="card mt-4">
            <div className="flex items-center justify-center mb-6">
                <h5 className="text-xl">Vos dépenses des 30 derniers jours</h5>
            </div>
            <CustomBarChart
                data={chartData}
            />
    </div>
}