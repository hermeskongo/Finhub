import {BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell, Tooltip, CartesianGrid} from 'recharts';
import React from "react";
import {formatNumber} from "../../utils/helper.js";


export const CustomBarChart = ({data}) => {


    const CustomTooltip = ({active, payload}) => {
        if(active && payload && payload.length) {
            return <div className="bg-white rounded-lg shadow-md p-2 border-gray-500">
                <p className="text-xs w-5 h-5 font-semibold text-primary w-full">{payload[0].payload.category}</p>
                <p className={"text-sm text-gray-500 mb-1"}>
                    {payload[0].payload.nb > 1 ? "Nombre de dépenses" : "Nombre de dépense"}: <span className="text-gray-900">{payload[0].payload.nb}</span>
                </p>
                <p className={"text-sm text-gray-500 mb-1"}>
                    Date: <span className="text-gray-900">{payload[0].payload.date}</span>
                </p>
                <p className="text-sm text-gray-500">
                    Montant: <span className="text-gray-900">{formatNumber(payload[0].payload.amount)}</span>
                </p>
            </div>
        }
    }
    return (
        <div className="mt-10">
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data}>
                    <XAxis dataKey="day" tick={{ fontSize: 12, fill: '#555' }} />
                    <YAxis tick={{ fontSize: 12, fill: '#6B7280' }} stroke='none'/>
                    <Tooltip content={CustomTooltip} />
                    <Bar dataKey="amount" radius={[10, 10, 0, 0]}>
                        {data.map((entry, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={index % 2 === 0 ? '#67c9cb' : '#2c56a5'}
                            />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};