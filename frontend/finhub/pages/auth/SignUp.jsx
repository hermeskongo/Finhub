import {AuthLayout} from "../../components/Auth/AuthLayout.jsx";
import {useState} from "react";
import {Input} from "../../components/Input/Input.jsx";
import {Link} from "react-router-dom";
import {ProfilPictureSelector} from "../../components/Input/ProfilPictureSelector.jsx";

export const SignUp = () => {
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [userPic, setUserPic] = useState("")
    const [error, setError] = useState(null)

    const handleSubmit = async () => {
        return
    }

    return(
        <AuthLayout>
            <div className="flex flex-col lg:w-[70%] h-auto md:h-full justify-center">
                <h2 className="text-2xl font-semibold text-black">Bienvenue !</h2>
                <p className="text-slate-800 mt-4 mb-6 text-sm">Vous êtes prier d'entrer les informations requises pour votre inscriptions</p>
                <form onSubmit={handleSubmit}>
                    <ProfilPictureSelector image={userPic} setImage={setUserPic} className="mb-6" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Input
                            label="Nom et prénom"
                            value={fullName}
                            placeholder="John Doe"
                            id="fullname"
                            type="text"
                            onChange={({target}) => setFullName(target.value)}
                        />
                        <Input
                            label="Email"
                            value={email}
                            placeholder="John@gmail.com"
                            id="email"
                            type="text"
                            onChange={({target}) => setEmail(target.value)}
                        />
                        <div className="col-span-2">
                            <Input
                                label="Mot de passe"
                                value={password}
                                placeholder="Entrez au moins 8 caractères"
                                id="password"
                                type="password"
                                onChange={({target}) => setPassword(target.value)}
                            />
                        </div>
                    </div>
                    {error &&  <li className="text-red-600 text-sm mb-5 mt-2">{error}</li>}

                    <button className="btn-primary mb-3" type="submit">SOUMETTRE</button>
                    <span>Vous avez déjà un compte ? <Link className="text-primary underline" to="/login">Connectez-vous</Link></span>
                </form>
            </div>
        </AuthLayout>
    )
}