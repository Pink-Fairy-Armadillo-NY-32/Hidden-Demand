const User = require('../models/signupModel.js')
const signupController = {};
const bcrypt = require('bcrypt');

signupController.createUser = async (req, res, next) => {
  console.log('entered createUser middleware')
  console.log('reqbody', req.body);
  const {username, email, password} = req.body;
  //Below queries will be used to verify provided username and email are unique.
  const existingUsernameQuery = `SELECT username FROM users WHERE Username='${username}'`
  const existingEmailQuery=`SELECT email FROM users WHERE Username='${email}'`
  

  try{
    //check to see if provided username already exists in database
    const existingUsernameObject = await User.query(existingUsernameQuery)
    console.log(existingUsernameObject)
    //check to see if provided email already exists in database
    const existingEmailObject = await User.query(existingEmailQuery)
    console.log(existingEmailObject)
    
    if(existingUsernameObject.rows.length>0) {
      console.log('username already exists')
     
      return res.status(404).json({message: 'username already exists'})
    } else if (existingEmailObject.rows.length>0){
      console.log('email already in use');
      return res.status(404).json({message: 'email already in use'})
    }else {
      
      //if username and email are both unique, then create new user
    const insertQuery  = `
    INSERT INTO users (username, email, password)
    VALUES ($1, $2, $3) RETURNING user_id, username;
    `;
  const safePassword = await bcrypt.hash(password, 10);
    
    const params = [username, email, safePassword];
     const response = await User.query(insertQuery, params);
     console.log(response)
    res.locals.user_id = response.rows[0].user_id;
    res.locals.username = response.rows[0].username;
    console.log(res.locals.user_id); 
    console.log(res.locals.username); 
    console.log('New user created!')
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