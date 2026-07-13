import {FaArrowRight} from "react-icons/fa";

export const SeeMoreBtn = ({onSeeMore, label="Voir plus"}) => {

    return (<button
        className="flex items-center gap-2 rounded-xl border border-[#334137] bg-[#182019] px-4 py-2 text-xs text-[#c4d0c6] transition-colors hover:cursor-pointer hover:border-primary hover:text-primary"
        onClick={onSeeMore}
    >
        {label}
        <FaArrowRight className="text-sm"/>
    </button>)
}
