import {formatNumber} from "../../utils/helper.js";

export const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="rounded-md py-3 px-6 bg-white shadow-sm shadow-gray-300">
                <p className="text-primary text-sm">{`${ label ? label : payload[0].name}`}</p>
                <p className="text-gray-800">Montant: {formatNumber(payload[0].value)}</p>
            </div>
        );
    }
    return null;
};