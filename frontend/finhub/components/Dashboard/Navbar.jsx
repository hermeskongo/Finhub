import {useState} from "react";
import {HiOutlineMenu, HiOutlineX} from "react-icons/hi";
import {SideMenu} from "./SideMenu.jsx";

export const Navbar = ({activeMenu}) => {

    const [showSideMenu, setShowSideMenu] = useState(false)

    function toggleShowSideMenu () {
        setShowSideMenu(!showSideMenu)
    }

    return (
        <>
            <div className="flex items-center gap-5 px-2 py-4 bg-white shadow-sm shadow-gray-100 backdrop-blur-[2px] sticky top-0 z-10">

                <button onClick={toggleShowSideMenu} className=" hover:cursor-pointer min-[1024px]:hidden">
                    {!showSideMenu ?
                        (<HiOutlineMenu className="text-2xl"/>)
                        :
                        (<HiOutlineX className="text-2xl"/>)
                    }
                </button>

                <h2 className="font-bold text-2xl ml-5 uppercase text-[#f7b600]">Finhub</h2>
            </div>
            {showSideMenu && <div className=""><SideMenu activeMenu={activeMenu}/></div>}
        </>
    )
}