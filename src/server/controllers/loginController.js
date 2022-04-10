const User = require('../models/signupModel.js')
const loginController = {};
// const bcrypt = require('bcrypt');

loginController.userLogin = async (req, res, next) =>{
  const { username, password } = req.body;

  // const verifiedPassword = bcrypt.compare(password, email);

  try{

    
  }
  catch(err){
    return next({
        log: `loginController.userLogin: ERROR: ${err}`,
        message: {err: 'Unable to login. Please try again'}
      });
    };
}




module.exports = loginController;