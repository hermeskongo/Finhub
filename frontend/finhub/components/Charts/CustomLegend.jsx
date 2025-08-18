export const CustomLegend = ({payload}) => {

    return (
        <ul className="flex items-center justify-center gap-6">
            {
                payload.map((entry, index) => (
                    <li key={`item-${index}`} style={{ color: entry.color }}>
                        <span className="rounded-full" style={{ display: 'inline-block', width: '10px', height: '10px', backgroundColor: entry.color, marginRight: '5px' }}></span>
                        {entry.value}
                    </li>
                ))
            }
        </ul>
    );
}