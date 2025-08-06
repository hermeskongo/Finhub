import jwt from "jsonwebtoken"
import {User} from "../models/User.js";

function generateToken(id) {
    return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: '8h'})
}

export const register = async (req, res) => {
    const {email, fullname, password, profileImg} = req.body

    if(!email || !fullname || !password) {
        return res.status(400).json({
            message: "Tous les champs sont requis",
            success: false
        })
    }

    try {

        const existingUser = await User.findOne({email})

        // Verfication de l'existence d'un utilisateur
        if(existingUser) {
            return res.status(400).json({
                message: "Il existe déjà un compte associé à votre e-mail",
                success: false,
            })
        }

        // Création d'un nouvel utilisateur
        const user = await User.create({
            email, fullname, password, profileImg
        })

        return res.json({
            success: true,
            message: "Inscription réussie",
            user,
            token: generateToken(user._id)
        })


    } catch (e) {
        return res.status(400).json({
            message: e.message,
            success: false
        })
    }

}

