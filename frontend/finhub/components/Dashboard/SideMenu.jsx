import {SIDEMENU_DATA} from "../../utils/data.js";
import {useContext, useState} from "react";
import {UserContext} from "../../context/UserContext.jsx";
import {NoProfile} from "./NoProfile.jsx";
import {NavLink, useNavigate} from "react-router-dom";
import Modal from "../General/Modal.jsx";
import {Alert} from "../General/Alert.jsx";

export const SideMenu = ({activeMenu}) => {

    const {user, deleteUser} = useContext(UserContext)
    const navigate = useNavigate()
    const [showLogoutModal, setShowLogoutModal] = useState(false)

    function handleClick (route) {
        if(route === 'logout') {
            setShowLogoutModal(true)
            return
        }
        navigate(route)
    }

    function handleLogout () {
        localStorage.setItem("accessToken", "")
        deleteUser()
        navigate('/login')
    }


    return <div className="w-64 h-full bg-white p-4 pt-14 flex flex-col items-center border-r-1 border-gray-200 backdrop-blur-[2px]">

        <div className="mb-2">{
                user?.profileImg ? (
                <img src={user.profileImg} alt="User picture profile" className="w-24 rounded-full border-2 border-primary h-24"/>
            ): <NoProfile></NoProfile>}
        </div>

        <h4 className="font-semibold text-lg mb-8">{user?.fullname || ""}</h4>

        {SIDEMENU_DATA.map((item, index) => (
            <button
                key={`menu_${index}`}
                className={`w-full rounded-[5px] hover:cursor-pointer mb-3 hover:bg-primary hover:text-white flex items-center gap-3 pl-4 py-4 ${item.label.toLowerCase() === activeMenu.toLowerCase() ? "text-white bg-primary" : "text-black"}`}
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