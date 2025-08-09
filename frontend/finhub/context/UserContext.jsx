import {createContext, useState} from "react";

export const UserContext = createContext()

export const UserProvider = ({children}) => {
    const [user, setUser] = useState(null)

    // Mettre à jour les informations de l'utilisateur
    function updateUser(user) {
        setUser(user)
    }

    // Supprimer les informations de l'utilisateur, par exemple lors du logout
    function deleteUser() {
        setUser(null)
    }

    return (
        <UserContext.Provider
            value={{
                user,
                updateUser,
                deleteUser
            }}
        >
            {children}
        </UserContext.Provider>
    )

}