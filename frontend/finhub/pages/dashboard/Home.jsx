import {useContext} from "react";
import {UserContext} from "../../context/UserContext.jsx";

export const Home = () => {
    const {user} = useContext(UserContext)
    console.log(user)
    return(
        <div className="text-amber-700">{user?.fullname}</div>
    )
}