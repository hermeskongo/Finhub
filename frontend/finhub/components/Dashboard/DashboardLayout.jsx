import {Navbar} from "./Navbar.jsx";
import {useContext} from "react";
import {UserContext} from "../../context/UserContext.jsx";
import {SideMenu} from "./SideMenu.jsx";
import {useAuth} from "../../hooks/useAuth.js";

export const DashboardLayout = ({children, activeMenu="Dashboard"}) => {
    useAuth()
    const {user} = useContext(UserContext)
    return(
        <div className="min-h-screen bg-fin-bg text-[#eef4ef]">
            <Navbar activeMenu={activeMenu}/>

            {user && (
                <div className="flex min-h-[calc(100vh-73px)]">
                    <div className="hidden lg:block">
                        <SideMenu activeMenu={activeMenu}></SideMenu>
                    </div>
                    <div className="fin-dashboard min-w-0 grow">
                        {children}
                    </div>
                </div>
            )}
        </div>
    )
}
