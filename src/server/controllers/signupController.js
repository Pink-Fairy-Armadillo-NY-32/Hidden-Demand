const User = require('../models/signupModel.js')
const signupController = {};
// const bcrypt = require('bcrypt');

signupController.createUser = async (req, res, next) => {
  console.log('entered createUser middleware')
  console.log(req.body);
  const {username, email, password} = req.body;

  
  // const safePassword = await bcrypt.hash(password, 10);
  // console.log(safePassword)
  // console.log(typeof safePassword)
  
  try{
    const text = `
    INSERT INTO users (username, email, password)
    VALUES ($1, $2, $3) 
    `;
    
    const params = [username, email, password];
    const result = await User.query(text, params);
    res.locals.user = result.Result;
    // const existing = ``
    // const existingUsername = await User.query(username)
    //if(existingUsername === username){
    //   return res.send('username already exists')
    // }

    console.log(result);
    //what does result return? not sure at the moment - do we need to redirect to root endpoint?
    // res.locals.newUser = JSON.stringify(result);
    return next();
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