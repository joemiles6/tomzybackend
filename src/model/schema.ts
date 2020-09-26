// schema
import mongoose, { Schema } from "mongoose"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { Request, Response, NextFunction } from "express";
// import {SESSION_KEY} from "../utils/secret"

export type UserType =  mongoose.Document & {
    findByCredentials: findByCredentials
    count: number
    username: string
    firstname: string
    lastname: string
    email: string
    password: string
    generateToken: generateToken
    refreshToken: refreshToken
    token: token,
    createdEvents: any
}
type generateToken = (next? : NextFunction) => void;
type refreshToken = (next? : NextFunction) => void;
type findByCredentials = (email: string, password: string) => void;
type token = string

const UserSchema: any = new mongoose.Schema({
    count: {
        type: Number,
        default: 0
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: String,
    email: {
        type: String,
        required: true,
        unique: true

    },
    password: {
        type: String,
        required: true
    },
    token: String,
    tokens: [{
        token: String
    }],
    createdEvents: [{
        type: Schema.Types.ObjectId,
        ref: "task"
    }]
})

UserSchema.methods.generateToken = async function  (req: Request, res: Response, next: NextFunction) {
    const user = this
    let token: string  = jwt.sign( {id: user._id}, "mybigtimesecrect", { expiresIn:  "15m"})
    user.tokens.push({token})
    user.token = token
    return token
}
UserSchema.methods.refreshToken = async function  (req: Request, res: Response, next: NextFunction) {
    const user = this
    let token: string  = jwt.sign( {id: user._id, count: user.count}, "refreshTimes", { expiresIn:  "1d"})
    return token
}
// UserSchema.methods.findByCredentials = async function (email, password) {
//     const user = this
//     const isEmail = await user.findOne({email})
//     if (!isEmail) {
//         throw new Error(email + ", this Email does not exist.")
//     }
//     const isMatch = await bcrypt.compare(password, isEmail.password)
//     if (!isMatch) {
//       throw new Error("password is not correct!")
//     }
//     return isEmail
// }
UserSchema.pre('save', async function(next){
    const user: any =  this as UserType
    if (!user.isModified("password")) {next()}
     const hashPassword = await bcrypt.hash(user.password, 8)
     try {
         user.password = hashPassword
         next()
     }catch (err) {
        return next(err)
     }
 })


export const UserModel = mongoose.model<UserType>("user",  UserSchema)