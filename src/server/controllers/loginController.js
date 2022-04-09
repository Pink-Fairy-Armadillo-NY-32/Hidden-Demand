const User = require('../models/signupModel.js')
const loginController = {};
const bcrypt = require('bcrypt');

loginController.userLogin = async (req, res, next) =>{
  const { email, password } = req.body;

  const verifiedPassword = bcrypt.compare(password, email);

  try{

    
  }
  catch(err){

  }

}