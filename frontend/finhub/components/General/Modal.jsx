import {useEffect, useRef} from "react";
import {createPortal} from "react-dom";
import {LuX} from "react-icons/lu";

export const Modal = (isOpen, onClose, title, children) => {
    const dialogRef = useRef(null)
    useEffect(() => {
        dialogRef.current.showModal()
    }, [])


    return createPortal(<div className=" flex items-center justify-between"><dialog
        ref={dialogRef}
        onClose={onClose}
        onCancel={onClose}
        className="w-full max-w-[650px] h-48 border-gray-400 rounded-lg bg-white"
    >
        <div className="flex items-center justify-between ">
            <h3 className="text-xl">{title}</h3>
            <LuX/>
        </div>
        {children}
    </dialog></div>, document.getElementById('root'))
}