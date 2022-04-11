
const db = require('../models/signupModel');
const session = {}

session.createSession = async (req,res,next) =>{
const query = `INSERT INTO session (cookie,timestamp) VALUES ($1 , $2)`
console.log('entered createSession')
// const deleteQuery = `DELETE FROM session WHERE timestamp < now() - interval 1 day`
console.log(res.locals.user_id);
const today = new Date();
try{
await db.query(query,[res.locals.user_id, today])
// await db.query(deleteQuery)
return next();
} catch(err){
    return next({
        log: `sessionController.createSession: ERROR: ${err}`,
        message: {err: 'Unable create new session'}
      });
}

}

session.deleteSession = async(req,res,next) =>{
    const {user_id} = req.cookies
    console.log(req.cookies)
    const query = `DELETE FROM session WHERE cookie=($1)`
    console.log('entered deleteSession');
    console.log(user_id);
    
    try{
        await db.query(query,[user_id])
        res.clearCookie('user_id')
        return next();
        } catch(err){
            return next({
                log: `sessionController.deleteSession: ERROR: ${err}`,
                message: {err: 'Unable delete existing session'}
              });
        }
}

module.exports = session