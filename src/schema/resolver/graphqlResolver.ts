import {UserModel} from "../../model/schema"
import Task from "../../model/medTask"

import Project from "../../Functions/index"
import loginProject from "../../Functions/loginProject"
import { access_token, refresh_token } from "../../config/tokens"
import api from "../../api/api" 
import moment from "moment"
let resolvers =  {
  Query: {
    hello: (parent, args) => {
      return 'apis'
    },
  },
Mutation: {
  postLog: async (parent, args, {res, isAuth}) => {
      const user = args.user
      const instance = new Project(user.username, user.firstname, user.lastname, user.email, user.password)
      const newUser =  await instance.persitData()
      await access_token(res, newUser['user'].token)
      await refresh_token(res, newUser['refresh'])
      return {id: newUser['user']._id, username: newUser['user'].username, loggedIn: isAuth}
  },
  cookieuser: async (parent, args, {res, isAuth, userId}) => {
    if (!isAuth) {
      throw new Error('Unauthenticated')
    }
    const userToken = await UserModel.findById(userId)
    userToken.password = null
    await access_token(res,userToken.token)
    return 'We got your back!'
  },
  User: async (parent, args, {res, isAuth, userId}) => {
    if (!isAuth) {
      throw new Error('Unauthenticated')
    }
    const userToken = await UserModel.findById(userId)
    userToken.password = null
    await access_token(res,userToken.token)
    return userToken
  },
  login: async (parent, args, {req, res, isAuth})  => {
    const user = args.user
    let instance = new loginProject(user.email, user.password)
    const loggedUser = await instance.LoginData()
    access_token(res, loggedUser.user.token)
    refresh_token(res, loggedUser.refresh)
    return {id: loggedUser['user']._id, username: loggedUser['user'].username}
    },
    logout: async(parent, args, {res, isAuth}) => {
      if (!isAuth) {
        throw new Error('Unauthenticated')
      }
      try {
        res.clearCookie('R_air')
        res.clearCookie('A_air')
        return 'logged out successfully !'
      } catch (e) {throw new Error('Unable to Logout!')}
   
    },
    Task: async (parent, args, {isAuth, userId})  => {
      if (!isAuth) {
        throw new Error('Unauthenticated')
      } 
      const user = args.task
      const tasks = new Task({
        explanation: user.explanation,
        createdAt: moment().format(),
        creator: userId,
        fakeId: user.fakeId
    })
    try {
      await tasks.save()
      let createdTask = tasks
      const doc = await UserModel.findById(userId)
      if (!doc) {
        throw new Error('User not found')
      }
      doc.createdEvents.push(tasks)
      doc.save()
      const populate = await Task.findOne({creator: userId}).populate('task').exec()
     return createdTask
    }catch (err) {
      throw new Error(err)
    }
      },
      getTask: async (parent, args, {isAuth, userId}) => {
        if (!isAuth) {  
          throw new Error('Unauthenticated')
        }
        const tasks = await Task.find({creator: userId})
        try {
          return tasks
        } catch (err) {
          throw new Error(err.message + ', Something wrong occured')
        }
      },
      
      deleteTask: async (parent, args, {isAuth, userId}) => {
        if (!isAuth) {  
          throw new Error('Unauthenticated')
        }
        const tasks = await Task.findOneAndDelete({fakeId: args.count})
        try {
          return tasks._id + ', item deleted!'
        } catch (err) {
          throw new Error(err.message + ', Something wrong occured')
        }
      },
    Api: async (parent, args, {isAuth, req}) => {
      if (!isAuth) {  
        throw new Error('Unauthenticated')
      }
      return JSON.stringify(api)
    }
    
}
}
export default resolvers