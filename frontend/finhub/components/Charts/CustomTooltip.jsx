import {formatNumber} from "../../utils/helper.js";

export const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="rounded-xl border border-[#334137] bg-[#182019] py-3 px-5 shadow-xl">
                <p className="text-primary text-sm">{`${ label ? label : payload[0].name}`}</p>
                <p className="text-[#e6eee7]">Montant: {formatNumber(payload[0].value)}</p>
            </div>
        );
    }
    return null;
};
