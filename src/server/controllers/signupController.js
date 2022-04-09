const User = require('../models/signupModel.js')
const signupController = {};
const bcrypt = require('bcrypt');

signupController.createUser = async (req, res, next) => {
  const {username, email, password} = req.body;

  safePassword = bcrypt.hash(password, 10);

  try{
    const text = `
    INSERT INTO users (username, email, password)
    VALUES ($1, $2, $3) 
    RETURNING *
    `;
    const params = [username, email, safePassword];
    const result = await User.query(text, params);
    console.log(result);
    res.locals.newUser = result;
    return next();
  }
  catch(err){
    console.log(err)
    return next({
      log: `signupController.createUser: ERROR: ${err}`,
      message: {err: 'Error occurred in signupController.createUser'}
    });
  };
};


module.exports = signupController;