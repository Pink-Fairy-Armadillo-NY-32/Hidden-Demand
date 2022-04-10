const User = require('../models/signupModel.js')
const signupController = {};
const bcrypt = require('bcrypt');

signupController.createUser = async (req, res, next) => {
  console.log('entered createUser middleware')
  console.log('reqbody', req.body);
  const {username, email, password} = req.body;
  const existingUsernameQuery = `SELECT username FROM users WHERE Username='${username}'`
  const existingEmailQuery=`SELECT email FROM users WHERE Username='${email}'`
  

  try{
    //check to see if username is already taken
    
    const existingUsernameObject = await User.query(existingUsernameQuery)
    console.log(existingUsernameObject)
    const existingEmailObject = await User.query(existingEmailQuery)
    console.log(existingEmailObject)
    
    if(existingUsernameObject.rows.length>0) {
      console.log('username already exists')
     
      return res.status(200).json({message: 'username already exists'})
    } else if (existingEmailObject.rows.length>0){
      console.log('email already in use');
      return res.status(200).json({message: 'email already in use'})
    }else {
      console.log('New user')
      //if username and email are both unique, then create new user
    const insertQuery  = `
    INSERT INTO users (username, email, password)
    VALUES ($1, $2, $3) 
    `;
  const safePassword = await bcrypt.hash(password, 10);
    
    const params = [username, email, safePassword];
    await User.query(insertQuery, params);
    
    return next();
    }
    
  }
  catch(err){
    console.log(err)
    return next({
      log: `signupController.createUser: ERROR: ${err}`,
      message: {err: `Error occurred in signupController.createUser ${err.error}`}
    });
  };
};


module.exports = signupController;