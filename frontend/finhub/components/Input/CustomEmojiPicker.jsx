import {useState} from "react";
import {LuImage, LuX} from "react-icons/lu";
import EmojiPicker from "emoji-picker-react";

export const CustomEmojiPicker = ({icon, onSelect}) => {

    const [isOpen, setIsOpen] = useState(false)

    function handleEmojiClick(imageUrl){
        onSelect(imageUrl)
        setIsOpen(false)
    }

    return(<div>
        <div onClick={()=> setIsOpen(true)} className="flex items-center justify-start gap-3 cursor-pointer">
            {icon ?
                <img src={icon} alt="Emoji représentant la transaction" className="h-10 w-10 rounded-xl"/>
                :
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#40533f] bg-[#1b241e] text-primary"><LuImage className="h-5 w-5"/></span>
            }
            <p className="text-sm text-[#c4d0c6]">{!icon ? "Choisir un émoji représentatif" : "Changer d'émoji"}</p>
        </div>

        {isOpen && <div className="absolute">
            <div
                onClick={() => setIsOpen(false)}
            >
                <LuX className="text-[#829085] text-lg"/>
            </div>
            <EmojiPicker
                open={isOpen}
                theme="dark"
                onEmojiClick={({imageUrl}) => handleEmojiClick(imageUrl)}
            />
        </div>}

    </div>)
}
