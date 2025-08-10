import {SIDEMENU_DATA} from "../../utils/data.js";
import {useContext} from "react";
import {UserContext} from "../../context/UserContext.jsx";

export const SideMenu = ({activeMenu}) => {

    const {user} = useContext(UserContext)


    return <div className="w-64 h-[90vh] bg-white p-4 flex flex-col items-center border-r-1 border-gray-200 backdrop-blur-[2px]">

        {user?.profileImg ? (
                <img src={user.profileImg} alt="User picture profile" className="w-24 rounded-full border-2 border-primary h-24 mb-3"/>
        ): <></>}

        <h4 className="font-semibold text-lg mb-8">{user?.fullname || ""}</h4>

        {SIDEMENU_DATA.map((item, index) => (
            <button key={`menu_${index}`}
                    className={`w-full rounded-[5px] hover:cursor-pointer mb-3 hover:bg-primary hover:text-white flex items-center gap-3 pl-4 py-4 ${item.label === activeMenu ? "text-white bg-primary" : "text-black"}`}
            >
                <item.icon className="text-xl"/>
                {item.label}
            </button>
        ))}
    </div>
}