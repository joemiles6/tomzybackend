import jwt from "jsonwebtoken"
import { UserModel } from "../model/schema"
import {access_token, refresh_token} from './tokens'


export const isAuth = async function (req, res, next) {
    // COOKIES
    const access_cookie = req.cookies['A_air']
    const refresh_cookie = req.cookies['R_air']

    if (!access_cookie && !refresh_cookie) {
        req.isAuth = false
        return next()
    }
    // TRY CATCH ACCESS COOKIE
    try { 
        let decoded
        decoded =  jwt.verify(access_cookie, 'mybigtimesecrect')
        if (!decoded) {
         req.isAuth = false
         return next()
        }
        req.isAuth = true
        req.userId = decoded.id
        return next()
    }catch (err) {}

    // IF ACCESS_COOKIE ES NOT VALID CHECK @REFRRESH!
    if (!refresh_token) {
        return next()
    }

    // TRY CATCH REFRESH
    let decoded
    try {
      decoded = jwt.verify(refresh_cookie, 'refreshTimes')
        if (!decoded) {
         req.isAuth = false
         return next()
        }
      }catch {
         req.isAuth = false
         return next()
      }

    //   CHECK IF REFRESH IS SIGNED AND DECODED USER IS FOUND
      const user = await UserModel.findOne({_id: decoded.id})
    //   CHECK IF THE TOKEN IS STILL VALID 
      if (!user || user.count !== decoded.count){
          req.isAuth = false
          return next
      }
    //   CREATE NEW ACCESS TOKEN ALONG WITH A REFRESH .
      const tokens = {access_token: user.generateToken(), refresh_token: user.refreshToken()}
    //   ADD TOKEN BACK TO COOKIES
      access_token(res, tokens.access_token)
      refresh_token(res, tokens.refresh_token)
    req.isAuth = true
    req.userId = decoded.id
    next()
}