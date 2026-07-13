import {createContext, useMemo, useState} from "react";

export const UserContext = createContext()

export const UserProvider = ({children}) => {
    const [user, setUser] = useState(() => {
        const demo = localStorage.getItem("accessToken") === "demo-token" || new URLSearchParams(window.location.search).get("demo") === "1"
        return demo ? { fullname: "Hermès Demo", email: "demo@finhub.local" } : null
    })

    // Mettre à jour les informations de l'utilisateur
    function updateUser(user) {
        setUser(user)
    }

    // Supprimer les informations de l'utilisateur, par exemple lors du logout
    function deleteUser() {
        setUser(null)
    }

    const value = useMemo(() => ({
        user,
        updateUser,
        deleteUser
    }), [user])

    return (
        <UserContext.Provider
            value={value}
        >
            {children}
        </UserContext.Provider>
    )

}
