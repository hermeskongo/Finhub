import {LuTrash2, LuTrendingDown, LuTrendingUp, LuUtensils} from "react-icons/lu";

export const TransactionCard = ({title, date, type,amount, icon, hideDeleteBtn=true, onDelete}) => {
    const isImageIcon = typeof icon === "string" && /^(https?:\/\/|data:image\/|\/)/.test(icon)

    return (
        <div className="flex flex-col items-stretch justify-between gap-4 rounded-xl px-3 py-4 transition hover:bg-[#182019] sm:flex-row sm:items-center sm:gap-5">
            <div className="flex min-w-0 items-center gap-3 sm:gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-[#1b211d] text-lg text-[#b8f36b]">
                    {isImageIcon ? (
                        <img src={icon} alt="Icône" className="h-full w-full object-cover"/>
                    ) : icon ? (
                        <span aria-hidden="true">{icon}</span>
                    ) : <LuUtensils/>}
                </div>
                <div className="min-w-0 flex flex-col">
                    <p className="truncate text-sm text-[#e6eee7]">{title}</p>
                    <p className="text-xs text-[#68756c]">{date}</p>
                </div>
            </div>
            <div className="flex w-full items-center justify-end gap-2 sm:w-auto sm:gap-4">
                <div className={`${type === 'income' ? "bg-[#dff9cf] text-[#2c7138]" : "bg-[#321c1d] text-[#ff9e9e]"} inline-flex min-w-0 shrink-0 items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-xs font-semibold leading-none`}>
                    <span className="whitespace-nowrap">{type === 'income' ? '+' : '-'} {amount}</span>
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-black/10" aria-hidden="true">
                        {type === 'income' ? <LuTrendingUp className="h-3.5 w-3.5"/> : <LuTrendingDown className="h-3.5 w-3.5"/>}
                    </span>
                </div>
                {!hideDeleteBtn &&
                    <button
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-950/60 text-lg text-red-300 transition hover:cursor-pointer hover:bg-red-900"
                        onClick={onDelete}
                    >
                        <LuTrash2/>
                    </button>}
            </div>
        </div>
    )
}
