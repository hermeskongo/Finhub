import {LuHandCoins, LuLayoutDashboard, LuLogOut, LuWalletMinimal} from "react-icons/lu";

export const SIDEMENU_DATA = [
    {
        id: 1,
        label: "Dashboard",
        icon: LuLayoutDashboard,
        path: '/dashboard'
    },
    {
        id: 2,
        label: "Revenus",
        icon: LuWalletMinimal,
        path: '/incomes'
    },
    {
        id: 3,
        label: "Dépenses",
        icon: LuHandCoins,
        path: '/expenses'
    },
    {
        id: 4,
        label: "Déconnexion",
        icon: LuLogOut,
        path: "logout"
    }
]