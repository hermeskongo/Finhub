import {formatNumber} from "../../utils/helper.js";

export const InfoCard = ({icon, text, color, amount}) => {

    return (
        <div className="flex items-center gap-5 mb-3 p-4 bg-white rounded-[16px] shadow-md shadow-gray-200">
            <div className={`${color} text-white text-xl min-w-16 min-h-16 rounded-full flex items-center justify-center shadow-md shadow-gray-400`}>{icon}</div>
            <div className="flex flex-col gap-2 w-full">
                <p className="text-gray-500">{text}</p>
                <h2 className="text-[22px] font-bold">{formatNumber(amount)}</h2>
            </div>
        </div>
    )
}