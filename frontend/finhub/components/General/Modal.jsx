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
        <div className="flex items-center justify-between">
            <dialog
            ref={dialogRef}
            onClose={onClose}
            onCancel={onClose}
            className="m-auto max-h-[90vh] w-[calc(100%-1.5rem)] max-w-[650px] overflow-y-auto rounded-2xl border border-[#334137] bg-[#121614] text-[#eef4ef] shadow-2xl outline-none [&::backdrop]:bg-[#050706]/80 [&::backdrop]:backdrop-blur-sm"
        >
            <div className="flex items-center justify-between border-b border-[#26302a] px-5 py-5 sm:px-7">
                <h3 className="text-xl font-semibold tracking-[-.03em] sm:text-2xl">{title}</h3>
                <button className="flex h-9 w-9 items-center justify-center rounded-xl text-[#829085] transition hover:bg-[#1b241e] hover:text-white"
                     type="button"
                     onClick={() => dialogRef.current.close()}
                >
                    <LuX/>
                </button>
            </div>
            <div className="p-5 sm:p-7">
                {children}
            </div>
        </dialog>
    </div>,
    document.getElementById('root'))
}

export default Modal
