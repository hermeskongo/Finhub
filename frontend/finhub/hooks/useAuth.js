import {useContext, useEffect} from "react";
import {UserContext} from "../context/UserContext.jsx";
import {useNavigate} from "react-router-dom";
import {axiosInstance} from "../utils/axiosInstance.js";
import {API_PATHS} from "../utils/apiPaths.js";
import {isDemoMode} from "../utils/demoData.js";

export const useAuth = () => {
    const {user, updateUser, deleteUser} = useContext(UserContext)
    const navigate = useNavigate()

    useEffect(() => {
        if (isDemoMode()) return
        if (user) return


        const fetchUserInfo = async () => {
            try {
                const response = await axiosInstance.get(API_PATHS.AUTH.GET_USER)
                if(response?.data) {
                    updateUser(response.data)
                }
            } catch (e) {
                console.error(`Failed to fetch user data: ${e}`)
            }
        }

        fetchUserInfo()

        return () => {
        }

    }, [navigate, deleteUser, updateUser])

}
