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
        return res.status(500).json({
            message: e.message,
            success: false
        })
    }

}

export const login = async (req, res) => {
    const {email, password} = req.body

    if(!email || !password) {
        return res.status(400).json({
            success: false,
            message: "Tous les champs sont requis."
        })
    }

    try {

        const user = await User.findOne({email})
        const isMatch = user.compare(password)

        if(!user || !isMatch) {
            return res.status(400).json({
                success: false,
                message: "Informations de connexions incorrects"
            })
        }

        return res.json({
            success: true,
            message: "Connexion réussie !",
            user: {
                fullname: user.fullname,
                email: user.email,
                profileImg: user.profileImg
            },
            token: generateToken(user._id)
        })

    } catch (e) {
        return res.status(500).json({
            success: false,
            message: e.message
        })
    }

}

export const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password')
        if(!user) {
            return res.status(404).json({message: "Aucun utilisateur trouvé !", success: false})
        }

        res.json(user)

    } catch (e) {
        return res.status(500).json({
            success: false,
            message: e.message
        })
    }
    
}

export const uploadImg = async (req, res) => {
    if(!req.file) {
        return res.status(400).json({
            message: "Aucun fichié uploader"
        })
    }
    const imageUrl = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`

    return res.json({ imageUrl })
}
