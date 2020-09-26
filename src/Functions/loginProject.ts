// class
/**
 ** @class
 ** @createUser
 */
import {UserModel, UserType }from "../model/schema"
import bcrypt from "bcryptjs"

 class loginProject {
   public email: string
   public password: string
    constructor (email: string, password: string  ) {
       this.email  = email
       this.password = password
    }
    dbData (){
      const userData = {
         email: this.email,
         password: this.password,
      }
      return userData
    }
    authenticate () {}
      async LoginData () {
        //   check if username or  email already exist
        // const user = await UserModel.findByCredentials(this.email, this.password)
        const email = this.email
        const password = this.password
        try {
        const isEmail = await UserModel.findOne({email})
        if (!isEmail) {
          throw new Error(email + ", this Email does not exist.")
        }
        const isMatch = await bcrypt.compare(password, isEmail.password)
        if (!isMatch) {
        throw new Error("password is not correct!")
        }
        const user  = isEmail
        // send a token to user
        user.generateToken()
        const refresh = await user.refreshToken()
        // return user back
         return{user, refresh}
        } catch (err) {
          throw new Error('Unable to Login')
        }
   
      }
 }
 export default loginProject