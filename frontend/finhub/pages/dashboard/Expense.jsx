import {DashboardLayout} from "../../components/Dashboard/DashboardLayout.jsx";
import {useAuth} from "../../hooks/useAuth.js";
import {ExpenseOverview} from "../../components/Expense/ExpenseOverview.jsx";
import {useEffect, useState} from "react";
import {axiosInstance} from "../../utils/axiosInstance.js";
import {API_PATHS} from "../../utils/apiPaths.js";
import {normalizeData} from "../../utils/helper.js";
import Modal from "../../components/General/Modal.jsx";

export const Expense = () => {
    useAuth()

    const [expenseData, setExpenseData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [openAddModal, setOpenAddModal] = useState(false)

    async function fetchExpenses() {
        setIsLoading(true)
        try {
            const response = await axiosInstance.get(API_PATHS.EXPENSES.ALL)

            if(response.data) {
                const data = normalizeData(response.data.expenses)
                setExpenseData(data)
            }

        } catch (e) {
            console.error(`Failed during fetching expense data: ${e}`)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchExpenses()
    }, [])

    return(
        <DashboardLayout activeMenu="dépenses">
            <div className="p-4">
                <ExpenseOverview
                    data={expenseData || []}
                    addExpense={() => setOpenAddModal(true)}
                />
            </div>
            <Modal
                isOpen={openAddModal}
                title="Ajouter une transaction"
                onClose={() => setOpenAddModal(false)}
            >

            </Modal>
        </DashboardLayout>
    )
}