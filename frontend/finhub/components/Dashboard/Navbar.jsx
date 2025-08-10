import {useState} from "react";
import {HiOutlineMenu, HiOutlineX} from "react-icons/hi";
import {SideMenu} from "./SideMenu.jsx";

export const Navbar = () => {

    const [showSideMenu, setShowSideMenu] = useState(false)

    function toggleShowSideMenu () {
        setShowSideMenu(!showSideMenu)
    }

    return (
        <>
            <div className="flex items-center gap-5 px-2 py-4 bg-white border-b-3 border-gray-200/50 backdrop-blur-[2px] sticky top-0 z-10">

                {!showSideMenu ?
                    (<HiOutlineMenu onClick={toggleShowSideMenu} className="text-2xl hover:cursor-pointer"/>)
                    :
                    (<HiOutlineX onClick={toggleShowSideMenu} className="text-2xl hover:cursor-pointer"/>)
                }

                <h2 className="font-bold text-lg text-black">Finhub Dashboard</h2>
            </div>
            {showSideMenu && <div className=""><SideMenu/></div>}
        </>
    )
}