import {useEffect, useState} from "react";
import {DashboardLayout} from "../../components/Dashboard/DashboardLayout.jsx";
import {useAuth} from "../../hooks/useAuth.js";
import {useNavigate} from "react-router-dom";
import {axiosInstance} from "../../utils/axiosInstance.js";
import {API_PATHS} from "../../utils/apiPaths.js";
import {InfoCard} from "../../components/Dashboard/InfoCard.jsx";
import {IoMdCard} from "react-icons/io";
import {LuHandCoins, LuWalletMinimal} from "react-icons/lu";
import {RecentTransaction} from "../../components/Dashboard/RecentTransaction.jsx";
import {FinanceOverview} from "../../components/Charts/FinanceOverview.jsx";
import {ExpenseTransaction} from "../../components/Dashboard/ExpenseTransaction.jsx";
import {Last30DaysExpenses} from "../../components/Charts/Last30DaysExpenses.jsx";
import {Last60DaysIncome} from "../../components/Charts/Last60DaysIncome.jsx";
import {IncomesTransaction} from "../../components/Dashboard/IncomesTransaction.jsx";

export const Home = () => {
    useAuth()
    const navigate = useNavigate()
    const [dashboardData, setDashboardData] = useState(null)
    const [loading, setLoading] = useState(false)

    const fetchDashboardData = async () => {
        if (loading) return
        setLoading(true)

        try {
            const  response = await axiosInstance.get(API_PATHS.DASHBOARD.GET_DATA)
            if(response.data) {
                setDashboardData(response.data)
            }
        } catch (e) {
            console.error("Failed to fetch dashboard data !", e.message)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchDashboardData()
        return () =>{}
    }, [])

    return(
        <DashboardLayout activeMenu="Dashboard">
           <div className="my-5 mx-auto p-5">
               <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <InfoCard
                        icon={<IoMdCard/>}
                        text="Votre Solde"
                        amount={dashboardData?.totalBalance || 0}
                        color="bg-primary"
                    />
                   <InfoCard
                       icon={<LuWalletMinimal/>}
                       text="Vos Revenus"
                       amount={dashboardData?.incomeTotal || 0}
                       color="bg-orange-500"
                   />
                   <InfoCard
                       icon={<LuHandCoins/>}
                       text="Vos Dépenses"
                       amount={dashboardData?.expenseTotal || 0}
                       color="bg-red-500"
                   />
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 mt-4 gap-4">
                   <RecentTransaction
                       transactions={dashboardData?.recentTransactions}
                       onSeeMore={() => navigate('/expenses')}
                   />
                    <FinanceOverview
                        balance={dashboardData?.totalBalance}
                        expense={dashboardData?.expenseTotal}
                        income={dashboardData?.incomeTotal}
                    />
                   <Last30DaysExpenses
                        data={dashboardData?.last30DaysExpenses.transactions || []}
                   />
                   <ExpenseTransaction
                       expenses={dashboardData?.last30DaysExpenses.transactions || []}
                       onSeeMore={() => navigate('/expenses')}
                   />
                   <IncomesTransaction
                       incomes={dashboardData?.last60DaysIncomes.transactions || []}
                       onSeeMore={() => navigate(('/incomes'))}
                   />
                   <Last60DaysIncome
                       data={dashboardData?.last60DaysIncomes.transactions || []}
                       totalAmount={dashboardData?.incomeTotal}
                   />
               </div>
           </div>
        </DashboardLayout>
    )
}