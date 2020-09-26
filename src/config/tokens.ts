export const access_token = async function (res, userToken) {
 const returnAccessToken = await userToken
   res.cookie('A_air', returnAccessToken, { expires: new Date(Date.now() + 36000 * 20)})
 return returnAccessToken
}
export const refresh_token = async function (res, userToken) {
  const returnRefreshToken = await userToken
  res.cookie('R_air', returnRefreshToken, {httpOnly: true, expires: new Date(Date.now() + 10000 * 280000)})
  return returnRefreshToken
}