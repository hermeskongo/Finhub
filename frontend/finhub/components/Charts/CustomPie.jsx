import {Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip} from "recharts";
import {CustomTooltip} from "./CustomTooltip.jsx";
import {CustomLegend} from "./CustomLegend.jsx";
import {formatNumber} from "../../utils/helper.js";

export const CustomPie = ({data, label, colors, totalAmount=0, showLegend=true}) => {

    return(
        <ResponsiveContainer width="100%" height={400}>
            <PieChart>
                <Pie
                    data={data}
                    dataKey="amount"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    dy="-25"
                    outerRadius={130}
                    innerRadius={100}
                    fill="#8884d8"
                    textAnchor={"Middle"}
                    label={false} // Pas de labels
                    labelLine={false}
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                    ))}
                </Pie>
                <Tooltip content={CustomTooltip}/>
                {showLegend &&<Legend content={CustomLegend}/>}
                <text
                    x="50%"
                    y='50%'
                    dy="-25"
                    textAnchor="middle"
                    fill="#666"
                    fontSize="18px"
                >
                    {label}
                </text>
                <text
                    x="50%"
                    y="50%"
                    dy="8"
                    textAnchor="middle"
                    fill="#333"
                    fontSize={24}
                    fontWeight="semid-bold"
                >
                    {formatNumber(totalAmount)}
                </text>
            </PieChart>
        </ResponsiveContainer>
    )
}