import {AuthLayout} from "../../components/Auth/AuthLayout.jsx";
import {LuTrendingUpDown} from "react-icons/lu";
import {Input} from "../../components/Input/Input.jsx";
import {useState} from "react";
import {validateEmail} from "../../utils/helper.js";
import {Link} from "react-router-dom";

export const Login = () => {



    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState([])

    /**
     *
     * @param {string} error
     */
    function addError (error) {
        const newErrors = [...errors, error]
        setErrors(newErrors)
    }

   const handleLogin = async (e) => {
        e.preventDefault()

        if(!validateEmail(email)) {
            addError("Please enter a valid email")
            return
        }
        if(!password || password.length < 8) {
            setErrors([])
            addError("Please enter a password")
            return
        }

       setErrors([])
    }

    return(
    <AuthLayout>
        <div className="flex flex-col lg:w-[70%] h-3/4 md:h-full">
            <h2 className="text-2xl font-semibold text-black">Welcome back</h2>
            <p className="text-slate-800 text-sm mt-4 mb-10">Please enter your details to login</p>

            <form onSubmit={handleLogin}>
                <Input
                    label={"Email"}
                    id={"email"}
                    placeholder="johndoe@example.com"
                    type="text"
                    onChange={({ target }) => setEmail(target.value)}
                    value={email}
                />
                <Input
                    label={"Password"}
                    id={"password"}
                    placeholder="Min 8 characters"
                    type="password"
                    onChange={({ target }) => setPassword(target.value)}
                    value={password}
                />
                {errors && errors.map((error) => {
                    return <li className="text-red-600 text-sm mb-5 mt-2">{error}</li>
                })}

                <button className="btn-primary mb-3" type="submit">LOGIN</button>
                <span>Don't have an account ? <Link className="text-primary underline" to="/signup">Sign Up</Link></span>
            </form>

        </div>
    </AuthLayout>
    )
}