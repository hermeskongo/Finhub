import {formatNumber} from "../../utils/helper.js";

export const InfoCard = ({icon, text, color, amount}) => {

    return (
        <div className="group flex items-center gap-4 rounded-2xl border border-[#26302a] bg-[#121614] p-4 transition-colors hover:border-[#52694e]">
            <div className="flex min-h-11 min-w-11 items-center justify-center rounded-xl bg-[#1c281d] text-lg text-primary">{icon}</div>
            <div className="flex flex-col gap-2 w-full">
                <p className="text-xs uppercase tracking-[.12em] text-[#748178]">{text}</p>
                <h2 className="text-xl font-semibold tracking-[-.04em] text-[#f4f8f4]">{formatNumber(amount)}</h2>
            </div>
        </div>
    )
}
