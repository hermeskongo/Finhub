import jwt, {decode} from "jsonwebtoken";
import {User} from "../models/User.js";

export async function protect (req, res, next) {
    const token = req.headers.authorization?.split(" ")[1]
    if(!token) return res.status(401).json({message: "Access denied, no token !"})

    try {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET)
        req.user = await User.findById(decodedToken.id).select('-password')
        next()
    } catch (e) {
        return res.status(401).json({message: `Access denied, ${e.message}`})
    }

}