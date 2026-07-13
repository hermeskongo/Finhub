import {LuPlus} from "react-icons/lu";
import {useEffect, useState} from "react";
import {prepareIncomedata} from "../../utils/helper.js";
import {CustomBarChart} from "../Charts/CustomBarChart.jsx";

export const IncomeOverview = ({transactions, onAddIncome}) => {
    const [chartData, setChartData] = useState([])

    useEffect(() => {
        const result = prepareIncomedata(transactions)
        setChartData(result)

        return () => {}
    }, [transactions])
    return (<div className="card py-3 px-4">
        <div className="py-3 px-4">
            <div className="flex flex-col md:flex-row md:justify-between md:gap-8 md:items-center">
                <div>
                    <h5 className="text-2xl font-bold mb-3">Aperçu des revenus</h5>
                    <p className="text-[#718076]">Suivez vos revenus au fil du temps et analysez vos tendances.</p>
                </div>
                <button
                    className="add-btn mt-5 md:mt-0"
                    onClick={onAddIncome}
                >
                    <LuPlus/>
                    Ajouter
                </button>
            </div>
        </div>
        <div className="mt-6">
            <CustomBarChart data={chartData} showLabel={false} show={true}/>
        </div>
    </div>)
}
