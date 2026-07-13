import {SIDEMENU_DATA} from "../../utils/data.js";
import {useContext, useState} from "react";
import {UserContext} from "../../context/UserContext.jsx";
import {NoProfile} from "./NoProfile.jsx";
import {NavLink, useNavigate} from "react-router-dom";
import Modal from "../General/Modal.jsx";
import {Alert} from "../General/Alert.jsx";
import {isDemoMode} from "../../utils/demoData.js";

export const SideMenu = ({activeMenu, onNavigate}) => {

    const {user, deleteUser} = useContext(UserContext)
    const navigate = useNavigate()
    const [showLogoutModal, setShowLogoutModal] = useState(false)

    function handleClick (route) {
        if(route === 'logout') {
            setShowLogoutModal(true)
            return
        }
        navigate(route)
        onNavigate?.()
    }

    function handleLogout () {
        localStorage.setItem("accessToken", "")
        deleteUser()
        navigate('/login')
    }


    return <div className="flex h-full min-h-[calc(100vh-69px)] w-full flex-col overflow-y-auto border-r border-[#26302a] bg-[#0f1210] px-4 py-6 lg:sticky lg:top-[73px] lg:h-[calc(100vh-73px)] lg:min-h-0 lg:w-[250px] lg:py-8">

        <div className="mb-2">{
                user?.profileImg ? (
                <img src={user.profileImg} alt="User picture profile" className="h-12 w-12 rounded-2xl border border-[#52694e] object-cover"/>
            ): <NoProfile></NoProfile>}
        </div>

        <div className="mb-10"><h4 className="text-sm font-semibold">{user?.fullname || ""}</h4><p className="mt-1 text-[10px] uppercase tracking-[.16em] text-[#69776c]">Personal workspace</p></div>

        {SIDEMENU_DATA.filter((item) => !(isDemoMode() && item.path === "logout")).map((item, index) => (
            <button
                key={`menu_${index}`}
                className={`mb-2 flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm transition-all hover:cursor-pointer ${item.label.toLowerCase() === activeMenu.toLowerCase() ? "bg-primary font-semibold text-[#0b0d0c] shadow-[0_8px_24px_rgba(184,243,107,.12)]" : "text-[#829085] hover:bg-[#182019] hover:text-white"}`}
                onClick={() => handleClick(item.path)}
            >
                <item.icon className="text-xl"/>
                {item.label}
            </button>
        ))}
        <Modal
            isOpen={showLogoutModal}
            title="Attention !"
            onClose={() => setShowLogoutModal(false)}
        >
            <Alert
                text="Êtes-vous sûr de vouloir vous déconnectez ?"
                onDelete={handleLogout}
                btnText="Oui"
            />
        </Modal>
      </div>
}
