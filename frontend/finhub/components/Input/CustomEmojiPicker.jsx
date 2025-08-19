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
        <div onClick={()=> setIsOpen(true)} className="flex items-center justify-start mb-3 gap-3 cursor-pointer">
            {icon ?
                <img src={icon} alt="Emoji that represent the source of the expense or the income" className="w-10 h-10"/>
                :
                <LuImage className="bg-cyan-200 text-lg text-primary w-10 h-10 rounded-full p-2 border-[1px] border-primary "/>
            }
            <p className="text-sm">{!icon ? "Choisir un émoji représentatif" : "Changer d'émoji"}</p>
        </div>

        {isOpen && <div className="absolute">
            <div
                onClick={() => setIsOpen(false)}
            >
                <LuX className="text-gray-500 text-lg"/>
            </div>
            <EmojiPicker
                open={isOpen}
                onEmojiClick={({imageUrl}) => handleEmojiClick(imageUrl)}
            />
        </div>}

    </div>)
}