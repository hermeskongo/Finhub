import {useState} from "react";
import {HiOutlineMenu, HiOutlineX} from "react-icons/hi";
import {SideMenu} from "./SideMenu.jsx";
import {LuBell, LuSearch} from "react-icons/lu";

export const Navbar = ({activeMenu}) => {

    const [showSideMenu, setShowSideMenu] = useState(false)

    function toggleShowSideMenu () {
        setShowSideMenu(!showSideMenu)
    }

    return (
        <>
            <div className="sticky top-0 z-20 flex items-center gap-5 border-b border-[#26302a] bg-[#0f1210]/95 px-5 py-4 backdrop-blur-md lg:px-8">

                <button onClick={toggleShowSideMenu} className=" hover:cursor-pointer min-[1024px]:hidden">
                    {!showSideMenu ?
                        (<HiOutlineMenu className="text-2xl"/>)
                        :
                        (<HiOutlineX className="text-2xl"/>)
                    }
                </button>

                <div className="ml-1 flex items-center gap-3"><span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary font-black text-[#0b0d0c]">F</span><div><h2 className="text-lg font-semibold tracking-[-.04em]">Finhub<span className="text-primary">.</span></h2><p className="hidden text-[10px] uppercase tracking-[.18em] text-[#657267] sm:block">Personal finance, clearly</p></div></div>
                <div className="ml-auto hidden items-center gap-3 sm:flex"><div className="flex items-center gap-2 rounded-xl border border-[#26302a] bg-[#151a17] px-3 py-2 text-xs text-[#6f7d73]"><LuSearch className="h-4 w-4" /> Rechercher <kbd className="ml-5 rounded border border-[#334137] px-1.5 py-0.5 text-[9px]">⌘ K</kbd></div><button className="rounded-xl border border-[#26302a] p-2.5 text-[#829085] hover:bg-[#182019] hover:text-primary"><LuBell className="h-4 w-4" /></button></div>
            </div>
            {showSideMenu && <div className="fixed inset-0 top-[69px] z-30 bg-black/50 lg:hidden" onClick={() => setShowSideMenu(false)}>
                <div className="h-full w-[min(84vw,280px)]" onClick={(event) => event.stopPropagation()}>
                    <SideMenu activeMenu={activeMenu} onNavigate={() => setShowSideMenu(false)}/>
                </div>
            </div>}
        </>
    )
}
