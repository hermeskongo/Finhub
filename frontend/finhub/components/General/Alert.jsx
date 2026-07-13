export const Alert = ({text, onDelete, btnText="Supprimer"}) => {

    return(<div className="flex flex-col items-stretch justify-between gap-5 sm:flex-row sm:items-center">
        <p className="text-md text-[#c4d0c6]">{text}</p>
        <button
            className="rounded-xl bg-[#6d3034] px-5 py-3 font-medium text-[#ffd9d9] transition hover:cursor-pointer hover:bg-[#873b40]"
            onClick={onDelete}
        >
            {btnText}
        </button>
    </div>)
}
