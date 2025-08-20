export const DeleteAlert = ({text, onDelete}) => {

    return(<div className="flex justify-between gap-3 items-center">
        <p className="text-md text-gray-800">{text}</p>
        <button
            className="bg-red-400 text-gray-50 rounded-md py-3 px-5 hover:cursor-pointer hover:bg-red-500 transition"
            onClick={onDelete}
        >
            Supprimer
        </button>
    </div>)
}