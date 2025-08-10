import {useContext} from "react";
import {UserContext} from "../../context/UserContext.jsx";
import {DashboardLayout} from "../../components/Dashboard/DashboardLayout.jsx";
import {useAuth} from "../../hooks/useAuth.js";

export const Home = () => {
    useAuth()
    return(
        <DashboardLayout activeMenu="Dashboard">
           <div className="my-5 mx-auto">Home</div>
        </DashboardLayout>
    )
}