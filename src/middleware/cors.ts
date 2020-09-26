/**
 *@param req
  *@param res
  *@param next
 */

   export default function (req, res, next): void {
       res.header('Access-Control-Allow-Origin', process.env.ORIGIN || 'http://localhost:8080');
       res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
       res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
       res.header('Access-Control-Allow-Credentials', 'true');
       if (req.method === 'OPTIONS') {
         res.sendStatus(200);
       } else {
         next();
       }
   }