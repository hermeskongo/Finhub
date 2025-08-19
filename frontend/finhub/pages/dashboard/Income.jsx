import {DashboardLayout} from "../../components/Dashboard/DashboardLayout.jsx";
import {IncomeOverview} from "../../components/Income/IncomeOverview.jsx";
import {useEffect, useState} from "react";
import {axiosInstance} from "../../utils/axiosInstance.js";
import {API_PATHS} from "../../utils/apiPaths.js";
import Modal from "../../components/General/Modal.jsx";
import {AddIncomeForm} from "../../components/Income/AddIncomeForm.jsx";
import toast from "react-hot-toast";

export const Income = () => {
    const [incomeData, setIncomeData] = useState([])
    const [openAddModal, setOpenAddModal] = useState(false)
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

    async function addIncome (income) {
        const {source, amount, date} = income

        if(!source.trim() && !amount && !date) {
            toast.error("Tous les champs sont requis")
            setOpenAddModal(false)
            return
        }
        if(!source.trim()) {
            toast.error("La source de revenu est requise")
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
            const response = await axiosInstance.post(API_PATHS.INCOMES.ADD, {
                source,
                amount,
                date
            })

            fetchAllIncomes()
        } catch (e) {
            console.error(`Error on adding income: ${e}`)
        } finally {
            setOpenAddModal(false)
        }
    }


    useEffect(() => {
        fetchAllIncomes()

        return () => {}
    }, [])


    return(
        <DashboardLayout activeMenu="Revenus">
            <div className="grid grid-cols-1 gap-6">
                <div className="p-4">
                    <IncomeOverview
                        transactions={incomeData}
                        onAddIncome={() => setOpenAddModal(true)}
                    />
                </div>
                <Modal
                    title={"Ajouter un revenu"}
                    isOpen={openAddModal}
                    onClose={() => setOpenAddModal(false)}
                >
                    <AddIncomeForm onAddIncome={addIncome}/>
                </Modal>
            </div>
        </DashboardLayout>
    )
}