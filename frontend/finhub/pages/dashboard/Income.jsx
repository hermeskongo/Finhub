import {DashboardLayout} from "../../components/Dashboard/DashboardLayout.jsx";
import {IncomeOverview} from "../../components/Income/IncomeOverview.jsx";
import {useEffect, useState} from "react";
import {axiosInstance} from "../../utils/axiosInstance.js";
import {API_PATHS} from "../../utils/apiPaths.js";

export const Income = () => {
    const [incomeData, setIncomeData] = useState([])
    const [openModal, setOpenModal] = useState(false)
    const [loading, setLoading] = useState(false)

    //Get All incomes

    async function fetchAllIncomes() {
        setLoading(true)
        try {
            const {data} = await axiosInstance.get(API_PATHS.INCOMES.ALL)
            if(data.incomes) {
                setIncomeData(data.incomes)
            }
        } catch (e) {
            console.error(`Error during fetching data: ${e.message}`)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchAllIncomes()
    }, [])


    return(
        <DashboardLayout activeMenu="Revenus">
            <div className="grid grid-cols-1 gap-6">
                <div>
                    <IncomeOverview
                        transactions={incomeData}
                        onAddIncome={() => setOpenModal(true)}
                    />
                </div>
            </div>
        </DashboardLayout>
    )
}