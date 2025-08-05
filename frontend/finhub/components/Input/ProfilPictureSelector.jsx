import {useRef, useState} from "react";
import {LuTrash, LuUpload, LuUser} from "react-icons/lu";

export const ProfilPictureSelector = ({image, setImage, className}) => {
    const inputRef = useRef(null)
    const [previewUrl, setPreviewUrl] = useState(null)

    const handleImageChange = (e) => {
        const file = e.target.files[0]
        if(file) {
            setImage(file)
            const preview = URL.createObjectURL(file)
            setPreviewUrl(preview)
        }
    }

    const handleRemove = () => {
        setImage(null)
        setPreviewUrl(null)
        inputRef.current.value = null
    }

    const onChooseFile = () => {
        inputRef.current.click()
    }

    return(
        <div className={className}>
            <input
                type="file"
                accept="image/*"
                className="hidden"
                alt="pic profile picture input"
                ref={inputRef}
                onChange={handleImageChange}
            />

            {!image ? (
                <div className="bg-cyan-200 h-20 w-20 rounded-full flex relative items-center">
                    <LuUser className="w-8 h-8 text-primary absolute left-6"/>
                    <button
                        type="button"
                        onClick={onChooseFile}
                        className="cursor-pointer bg-primary h-8 w-8 text-white absolute -bottom-2 -right-2 flex items-center justify-center rounded-full"
                    >
                        <LuUpload />
                    </button>
                </div>
            ) : (
                <div className="h-20 w-20 rounded-full flex relative items-center">
                    <img
                        src={previewUrl}
                        alt="User profile picture"
                        className="w-20 h-20 absolute rounded-full"
                    />
                    <button
                        type="button"
                        className="cursor-pointer bg-red-600 h-8 w-8 text-white absolute -bottom-2 -right-2 flex items-center justify-center rounded-full"
                        onClick={handleRemove}
                    >
                        <LuTrash/>
                    </button>
                </div>
            )}

        </div>
    )

}