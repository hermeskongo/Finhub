import {useState} from "react";
import {FaRegEye, FaRegEyeSlash} from "react-icons/fa";

/**
 *
 * @param {string} value
 * @param {string} placeholder
 * @param {string} label
 * @param {string} id
 * @param {string} type
 * @param {function} onChange
 *
 */
export const Input = ({value, placeholder, label, id, type, onChange}) => {
    const [showPassword, setShowPassword] = useState(false)

    const toggleShowPassword = () => {
        return setShowPassword(!showPassword)
    }
    return(
        <div className="flex flex-col">
            <label htmlFor={id} className="text-sm font-medium text-[#aab8ad]">{label}</label>
            <div className="input-box">
                <input
                    className="w-full bg-transparent text-[#eef4ef] outline-none placeholder:text-[#657267]"
                    type={ type==='password' ? showPassword ? 'text' : 'password' : type}
                    id={id}
                    value={value}
                    onChange={(e) => onChange(e)}
                    placeholder={placeholder}
                />
                {type === "password" && (
                    <>
                        {showPassword ? (
                            <FaRegEye
                                size={22}
                                className="text-primary cursor-pointer"
                                onClick={() => toggleShowPassword()}
                            />
                        ): (
                           <FaRegEyeSlash
                               size={22}
                               className="text-primary cursor-pointer"
                               onClick={() => toggleShowPassword()}
                           />
                        )}
                    </>
                )}
            </div>
        </div>
    )
}
