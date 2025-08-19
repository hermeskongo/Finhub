import {useEffect, useRef} from "react";
import {createPortal} from "react-dom";
import {LuX} from "react-icons/lu";

const Modal = ({isOpen, onClose, title, children}) => {
    if(!isOpen) return null

    const dialogRef = useRef(null)
    useEffect(() => {
        dialogRef.current.showModal()
    }, [title])


    return createPortal(
        <div className=" flex items-center justify-between">
            <dialog
            ref={dialogRef}
            onClose={onClose}
            onCancel={onClose}
            className="w-full max-w-[650px] mx-5 md:mx-auto my-auto h-min border-gray-400 shadow-md outline-none rounded-lg bg-white"
        >
            <div className="flex items-center justify-between border-b-2 border-b-gray-300 p-6">
                <h3 className="text-2xl">{title}</h3>
                <div className="text-xl text-gray-500 cursor-pointer w-8 h-8 rounded-md flex justify-center items-center bg-transparent hover:bg-gray-100"
                     onClick={() => dialogRef.current.close()}
                >
                    <LuX/>
                </div>
            </div>
            <div className="p-6">
                {children}
            </div>
        </dialog>
    </div>,
    document.getElementById('root'))
}

export default Modal