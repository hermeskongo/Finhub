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

const DEMO_TRANSACTIONS = [
    {_id: "d1", type: "income", source: "Mission freelance", amount: 850000, date: "2026-07-12", category: "Freelance"},
    {_id: "d2", type: "expense", category: "Logement", amount: 280000, date: "2026-07-10"},
    {_id: "d3", type: "expense", category: "Transport", amount: 42000, date: "2026-07-09"},
    {_id: "d4", type: "income", source: "Produit numérique", amount: 320000, date: "2026-07-07"},
    {_id: "d5", type: "expense", category: "Alimentation", amount: 68500, date: "2026-07-05"},
    {_id: "d6", type: "expense", category: "Outils logiciels", amount: 29000, date: "2026-07-03"},
    {_id: "d7", type: "income", source: "Conseil", amount: 460000, date: "2026-06-29"},
    {_id: "d8", type: "expense", category: "Abonnements", amount: 18500, date: "2026-06-26"},
    {_id: "d9", type: "expense", category: "Santé", amount: 35000, date: "2026-06-22"},
    {_id: "d10", type: "income", source: "Mission freelance", amount: 720000, date: "2026-06-18"},
]

const DEMO_DASHBOARD = {
    user: {fullname: "Hermès Demo"}, totalBalance: 1879500, incomeTotal: 2350000, expenseTotal: 470500,
    recentTransactions: DEMO_TRANSACTIONS,
    last30DaysExpenses: {transactions: DEMO_TRANSACTIONS.filter((item) => item.type === "expense")},
    last60DaysIncomes: {transactions: DEMO_TRANSACTIONS.filter((item) => item.type === "income")},
}

export const Home = () => {
    useAuth()
    const navigate = useNavigate()
    const [dashboardData, setDashboardData] = useState(null)
    const [loading, setLoading] = useState(false)

    const fetchDashboardData = async () => {
        if (loading) return
        if (localStorage.getItem("accessToken") === "demo-token") {
            setDashboardData(DEMO_DASHBOARD)
            return
        }
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
           <div className="mx-auto max-w-[1500px] p-5 lg:p-8">
               <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><p className="text-[10px] uppercase tracking-[.2em] text-primary">Monday, 13 July 2026</p><h1 className="mt-2 text-3xl font-semibold tracking-[-.06em] text-white">Good morning, {dashboardData?.user?.fullname?.split(' ')[0] || 'Hermès'}.</h1><p className="mt-2 text-sm text-[#718076]">Here&apos;s the signal from your money this month.</p></div><div className="rounded-xl border border-[#26302a] bg-[#121614] px-4 py-3 text-right"><p className="text-[10px] uppercase tracking-[.14em] text-[#718076]">Monthly health</p><p className="mt-1 text-sm font-semibold text-primary">On track <span className="ml-1 text-[#718076]">↗</span></p></div></div>
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
