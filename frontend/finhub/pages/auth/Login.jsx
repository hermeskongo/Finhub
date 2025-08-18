import {AuthLayout} from "../../components/Auth/AuthLayout.jsx";
import {LuTrendingUpDown} from "react-icons/lu";
import {Input} from "../../components/Input/Input.jsx";
import {use, useContext, useState} from "react";
import {validateEmail} from "../../utils/helper.js";
import {Link, useNavigate} from "react-router-dom";
import {axiosInstance} from "../../utils/axiosInstance.js";
import {API_PATHS} from "../../utils/apiPaths.js";
import {UserContext} from "../../context/UserContext.jsx";

export const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)
    const {updateUser} = useContext(UserContext)

   const handleLogin = async (e) => {
        e.preventDefault()

        if(!validateEmail(email)) {
            setError("Veuillez entrez un email valide")
            return
        } else if(!password) {
            setError("Veuillez entrez un mot de passe")
            return
        }

        setError(null)

       // Appel à l'API
       try {
            const response = await axiosInstance.post(API_PATHS.AUTH.LOGIN, {
                email, password
            })
           const {token, user} = response.data

           if(token) {
               localStorage.setItem("accessToken", token)
               updateUser(user)
               navigate('/dashboard')
           }

       } catch (e) {
            if(e.response && e.response.data) {
                setError(e.response.data.message)
            }
       }
        
    }

    return(
    <AuthLayout>
        <div className="flex flex-col lg:w-[70%] h-auto md:h-full justify-center">
            <h2 className="text-2xl font-semibold text-black">Bienvenue !</h2>
            <p className="text-slate-800 mt-4 mb-6 text-sm">Vous êtes prier d'entrer les informations requises pour votre connexions</p>

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
                    placeholder="Entrez au moins 8 caractères"
                    type="password"
                    onChange={({ target }) => setPassword(target.value)}
                    value={password}
                />
                {error &&  <li className="text-red-600 text-sm mb-5 mt-2">{error}</li>}

                <button className="btn-primary mb-3" type="submit">SOUMETTRE</button>
                <span>Pas de compte ? <Link className="text-primary underline" to="/signup">Inscrivez-vous</Link></span>
            </form>

        </div>
    </AuthLayout>
    )
}