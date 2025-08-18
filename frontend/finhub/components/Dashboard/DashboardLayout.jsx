import {Navbar} from "./Navbar.jsx";
import {useContext} from "react";
import {UserContext} from "../../context/UserContext.jsx";
import {SideMenu} from "./SideMenu.jsx";

export const DashboardLayout = ({children, activeMenu="Dashboard"}) => {
    const {user} = useContext(UserContext)
    return(
        <div className="">
            <Navbar activeMenu={activeMenu}/>

            {user && (
                <div className="flex">
                    <div className="max-[1024px]:hidden">
                        <SideMenu activeMenu={activeMenu}></SideMenu>
                    </div>
                    <div className="grow">
                        {children}
                    </div>
                </div>
            )}
        </div>
    )
}