import {DashboardLayout} from "../../components/Dashboard/DashboardLayout.jsx";
import {useAuth} from "../../hooks/useAuth.js";
import {ExpenseOverview} from "../../components/Expense/ExpenseOverview.jsx";
import {useEffect, useState} from "react";
import {axiosInstance} from "../../utils/axiosInstance.js";
import {API_PATHS} from "../../utils/apiPaths.js";
import Modal from "../../components/General/Modal.jsx";
import {AddExpenseForm} from "../../components/Expense/AddExpenseForm.jsx";
import toast from "react-hot-toast";
import {ExpenseList} from "../../components/Expense/ExpenseList.jsx";
import {Alert} from "../../components/General/Alert.jsx";

export const Expense = () => {
    useAuth()

    const [expenseData, setExpenseData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [openAddModal, setOpenAddModal] = useState(false)
    const [openDeleteModal, setOpenDeleteModal] = useState({
        show: false,
        id: null
    })

    async function fetchExpenses() {
        setIsLoading(true)
        try {
            const response = await axiosInstance.get(API_PATHS.EXPENSES.ALL)

            if(response.data) {
                setExpenseData(response.data.expenses)
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
            await axiosInstance.post(API_PATHS.EXPENSES.ADD, expense)

            toast.success("Transaction ajoutée avec succès")
            setOpenAddModal(false)
            fetchExpenses()
        } catch (e) {
            console.error(`Error while adding expense's transaction: ${e}`)
        }
    }

    async function deleteExpense (id) {
        try {

            console.log(await axiosInstance.delete(API_PATHS.EXPENSES.DELETE(id)))
            toast.success("Transaction supprimée avec succès")
            setOpenDeleteModal({show: false, id: null})
            fetchExpenses()
        } catch (e) {
            console.log(`Error while deleting expense: ${e}`)
        }
    }

    async function downloadExpenseSheet (){
        try {
            const response = await axiosInstance.get(API_PATHS.EXPENSES.DOWNLOAD, {
                responseType: "blob"
            })


            const url = window.URL.createObjectURL(new Blob([response.data]))
            const link = document.createElement('a')
            link.href = url
            link.download = "finhub-expenses_details.xlsx"
            document.body.append(link)
            link.click()
            link.parentNode.removeChild(link)
            window.URL.revokeObjectURL(url)

        } catch (e) {
            console.error(`Error while downloading expense sheet: ${e}`)
        }
    }

    useEffect(() => {
        fetchExpenses()
    }, [])

    return(
        <DashboardLayout activeMenu="dépenses">
            <div className="p-4 grid gap-3">
                <ExpenseOverview
                    data={expenseData || []}
                    addExpense={() => setOpenAddModal(true)}
                />
                <ExpenseList
                    expenses={expenseData || []}
                    onDelete={(id) => setOpenDeleteModal({show: true, id: id})}
                    onDownload={() => downloadExpenseSheet()}
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
            <Modal
                isOpen={openDeleteModal.show}
                title="Attention !"
                onClose={() => setOpenDeleteModal({show: false, id: null})}
            >
                <Alert
                    text="Êtes vous sûr de vouloir supprimer transaction ?"
                    onDelete={() => deleteExpense(openDeleteModal.id)}
                />
            </Modal>
        </DashboardLayout>
    )
}