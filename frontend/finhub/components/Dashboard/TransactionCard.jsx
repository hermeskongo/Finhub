import {LuTrash2, LuTrendingDown, LuTrendingUp, LuUtensils} from "react-icons/lu";
import {useState} from "react";

export const TransactionCard = ({title, date, type,amount, icon, hideDeleteBtn=true, onDelete}) => {

    return (
        <div className="flex flex-col min-[780px]:flex-row items-center justify-between gap-5 px-6 py-4 rounded-md hover:bg-gray-50 transition">
            <div className="flex items-center gap-4">
                <div className="bg-gray-100/10 rounded-full min-w-12 min-h-12 text-black flex items-center justify-center">
                    {icon ? (
                        <img src={icon} alt="Icone" className="w-12 h-12"/>
                    ): <LuUtensils/>}
                </div>
                <div className="flex flex-col">
                    <p className="text-black">{title}</p>
                    <p className="text-gray-500 text-sm">{date}</p>
                </div>
            </div>
            <div className="flex items-center justify-end gap-2 md:gap-6">
                <div className={`${type === 'income' ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"} flex items-center gap-2 text-sm text-center rounded-md py-2 px-4`}>
                    {type === 'income' ? `+ ` : `- `} {amount}
                    {type === 'income' ? <LuTrendingUp/> : <LuTrendingDown/>}
                </div>
                {!hideDeleteBtn &&
                    <button
                        className="text-xl w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-800 hover:cursor-pointer hover:bg-red-200 transition"
                        onClick={onDelete}
                    >
                        <LuTrash2/>
                    </button>}
            </div>
        </div>
    )
}