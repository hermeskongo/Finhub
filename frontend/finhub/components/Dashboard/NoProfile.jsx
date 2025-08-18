import {getInitials} from "../../utils/helper.js";
import {useContext} from "react";
import {UserContext} from "../../context/UserContext.jsx";

export const NoProfile = () => {
    const {user} = useContext(UserContext)

    const initials = getInitials(user.fullname || "")

    return (
        <div className="w-24 rounded-full flex items-center justify-around border-2 border-cyan-300 bg-primary h-24">
            <p className="text-[40px] text-white tracking-wide">{initials}</p>
        </div>
    )
}