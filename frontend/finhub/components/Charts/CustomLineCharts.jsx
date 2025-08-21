import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import {formatNumber} from "../../utils/helper.js";

export default function CustomLineCharts({data}) {

    return (
            <ResponsiveContainer width="100%" height={300}>
                <AreaChart
                    data={data}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 20,
                    }}
                >
                    <defs>
                        <linearGradient id="colorline" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#67c9cb" stopOpacity={0.6}/>
                            <stop offset="90%" stopColor="#67c9cb" stopOpacity={0.1}/>
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="2 2" />
                    <XAxis
                        dataKey="uniqueDate"
                        tick={{ fontSize: 14, fill: '#000'}}
                        tickFormatter={(value) => {
                            return data.find(item => item.uniqueDate === value)?.date || value
                        }}
                    />
                    <YAxis tick={{ fontSize: 14, fill: '#6B7280'}}/>
                    <Tooltip content={CustomLineToolTip}/>
                    <Area
                        type="monotone"
                        dataKey="amount"
                        stroke="#67c9cb"
                        strokeWidth={2}
                        fill="url(#colorline)"
                        activeDot={{ r: 6 }}
                    />
                </AreaChart>
            </ResponsiveContainer>
    );
}

const CustomLineToolTip = ({active, payload}) => {
    if(active && payload && payload.length) {
        return (<div className="py-3 px-4 rounded-lg bg-white shadow-md flex flex-col items-start justify-center gap-1">
            <p className="text-sm text-primary font-semibold">Nombre de dépenses: {payload[0].payload.nb}</p>
            <p className="text-lg text-gray-800">Montant: <span className="text-red-600">-{formatNumber(payload[0].value)}</span></p>
        </div>)
    }
    return null
}