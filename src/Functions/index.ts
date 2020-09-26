// class
/**
 ** @class
 ** @createUser
 */
import {UserModel }from "../model/schema"

 class Project {
   public username: string
   public firstname: string
   public lastname: string
   public email: string
   public password: string
    constructor (username: string, firstname: string,lastname: string, email: string, password: string  ) {
       this.username = username
       this.firstname = firstname
       this.lastname = lastname
       this.email  = email
       this.password = password
    }
    dbData (){
      const userData = {
         username: this.username,
         firstname:this.firstname,
         lastname: this.lastname,
         email: this.email,
         password: this.password,
      }
      return userData
    }
      async persitData () {
      const isEmail = await UserModel.findOne({email: this.email})
      const isUsername = await UserModel.findOne({username: this.username})
        if (isEmail){
         throw new Error('email has been used')
         }
         if (isUsername){
            throw new Error('username has been used')
            }
         const data = this.dbData() 
         const user  = new UserModel(data)
         try {
            // send a token to user
            user.generateToken()
            const refresh = await user.refreshToken()
            // save token
            await user.save()
            // return user back
            return {user, refresh}
         }catch (err) {return new Error('Unable to sign up')}
      }
 }
 export default Project