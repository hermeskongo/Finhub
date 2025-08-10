import {AuthLayout} from "../../components/Auth/AuthLayout.jsx";
import {useContext, useState} from "react";
import {Input} from "../../components/Input/Input.jsx";
import {Link, useNavigate} from "react-router-dom";
import {ProfilPictureSelector} from "../../components/Input/ProfilPictureSelector.jsx";
import {validateEmail} from "../../utils/helper.js";
import {axiosInstance} from "../../utils/axiosInstance.js";
import {API_PATHS} from "../../utils/apiPaths.js";
import {UserContext} from "../../context/UserContext.jsx";
import {uploadImg} from "../../utils/uploadImg.js";

export const SignUp = () => {
    const navigate = useNavigate()
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [userPic, setUserPic] = useState("")
    const [error, setError] = useState(null)
    const {updateUser} = useContext(UserContext)

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(!fullName || !password || !email) {
            setError("Tout les champs sont requis")
        } else if(!validateEmail(email)) {
            setError("Veuillez entrez un email valide")
        } else  {
           try {
                let profileImg = ""
               if(userPic) {
                   const imgUploadres = await uploadImg(userPic)
                   profileImg = imgUploadres.imageUrl || ""
               }

               const response = await axiosInstance.post(API_PATHS.AUTH.REGISTER, {
                   fullname: fullName,
                   profileImg,
                   email,
                   password
               })
               const {token, user} = response.data

               if(token) {
                   localStorage.setItem("accessToken", token)
                   updateUser(user)
                   navigate('/dashboard')
               }


           } catch (e) {
               console.log(e)
               if(e.response && e.response.data) {
                   setError(e.response.data.message)
               }
           }
       }
    }

    return(
        <AuthLayout>
            <div className="flex flex-col lg:w-[70%] h-auto md:h-full justify-center">
                <h2 className="text-2xl font-semibold text-black">Bienvenue !</h2>
                <p className="text-slate-800 mt-4 mb-6 text-sm">Vous êtes prier d'entrer les informations requises pour votre inscriptions</p>
                <form onSubmit={handleSubmit} encType="multipart/form-data">
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