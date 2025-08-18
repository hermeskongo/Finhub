import {FaArrowRight} from "react-icons/fa";

export const SeeMoreBtn = ({onSeeMore, label="Voir plus"}) => {

    return (<button
        className="bg-gray-100 py-2 px-6 rounded-md hover:cursor-pointer flex items-center gap-2"
        onClick={onSeeMore}
    >
        {label}
        <FaArrowRight className="text-sm"/>
    </button>)
}