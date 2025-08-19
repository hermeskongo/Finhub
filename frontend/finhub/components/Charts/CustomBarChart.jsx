import {BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell, Tooltip, CartesianGrid} from 'recharts';
import React from "react";
import {formatNumber} from "../../utils/helper.js";


export const CustomBarChart = ({data, showLabel=true, show=true}) => {

    const CustomTooltip = ({active, payload, show}) => {

        if(active && payload && payload.length) {
            const d = payload[0].payload

            return (
                <div className="bg-white rounded-lg shadow-md p-2 border-gray-500">
                <p className="text-xs w-5 h-5 font-semibold text-primary w-full">{show && d.category}</p>
                <p className={"text-sm text-gray-500 mb-1"}>
                    {payload[0].payload.nb > 1 ? `Nombre de dépenses` : `Nombre de dépense`}: {showLabel && <span
                    className="text-gray-900">{d.nb}</span>}
                </p>
                <p className="text-sm text-gray-500">
                    Montant: <span className="text-gray-900">{formatNumber(d.amount)}</span>
                </p>
            </div>)
        }
    }
    return (
        <div className="mt-10">
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data}>
                    <XAxis
                        className="mb-10"
                        dataKey="uniqueDate"
                        tick={{ fontSize: 12, fill: '#000'}}
                        tickFormatter={(value) => {
                            return data.find( item => item.uniqueDate === value)?.date || value
                        }}
                    />
                    <YAxis tick={{ fontSize: 12, fill: '#6B7280' }} stroke='none'/>
                    <Tooltip content={<CustomTooltip show={show}/>} />
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