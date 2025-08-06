import mongoose, {Schema} from "mongoose";
import bcrypt from "bcryptjs"
const UserSchema = new Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        min: [8, "Au moins 8 caractères requis"]
    },
    profileImg: {
        type: String,
        default: null
    }
}, {timestamps: true})

UserSchema.pre('save', async function(next){
    if(this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10)
    }
    next()
})

/**
 *
 * @param{string} candidatePassword
 * @returns {Promise<boolean>}
 */
UserSchema.methods.compare = async function(candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password)
}

export const User = mongoose.model('User', UserSchema)
