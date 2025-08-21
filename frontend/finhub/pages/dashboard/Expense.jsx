import {DashboardLayout} from "../../components/Dashboard/DashboardLayout.jsx";
import {useAuth} from "../../hooks/useAuth.js";
import {ExpenseOverview} from "../../components/Expense/ExpenseOverview.jsx";
import {useEffect, useState} from "react";
import {axiosInstance} from "../../utils/axiosInstance.js";
import {API_PATHS} from "../../utils/apiPaths.js";
import {normalizeData} from "../../utils/helper.js";
import Modal from "../../components/General/Modal.jsx";
import {AddExpenseForm} from "../../components/Expense/AddExpenseForm.jsx";
import toast from "react-hot-toast";

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
                const data = normalizeData(response.data.expenses, "asc")
                setExpenseData(data)
            }

        } catch (e) {
            console.error(`Failed during fetching expense data: ${e}`)
        } finally {
            setIsLoading(false)
        }
    }

    async function addExpense (expense){

        const {category, amount, date, icon} = expense

        if(!category.trim() && !amount && !date) {
            toast.error("Tous les champs sont requis")
            setOpenAddModal(false)
            return
        }
        if(!category.trim()) {
            toast.error("La catégorie de la dépense est requise")
            setOpenAddModal(false)
            return
        }
        if(!amount || isNaN(amount) || Number(amount) <=0) {
            toast.error("Entrez un montant valide (supérieur à 0)")
            setOpenAddModal(false)
            return
        }
        if(!date) {
            toast.error("la date est requise")
            setOpenAddModal(false)
            return
        }


        try {
            const response = await axiosInstance.post(API_PATHS.EXPENSES.ADD, expense)
            console.log(response)
            toast.success("Transaction ajoutée avec succès")
            setOpenAddModal(false)
            fetchExpenses()
        } catch (e) {
            console.error(`Error while adding expense's transaction: ${e}`)
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
                <AddExpenseForm
                    addExpense={addExpense}
                />
            </Modal>
        </DashboardLayout>
    )
}