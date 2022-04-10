const User = require('../models/signupModel.js')
const loginController = {};
const bcrypt = require('bcrypt');

loginController.userLogin = async (req, res, next) =>{
  const { username, password } = req.body;
  //query password from db based on username
  const passwordQuery = `SELECT password FROM users WHERE username='${username}'`
  
  try{
    //grab saved password from database
    const dbPassword = await User.query(passwordQuery);

    if(dbPassword.rows.length>0){
      //if user exists in the database, password will be successfuly retrieved from db
    console.log(dbPassword.rows[0].password);
    console.log(password);
    //compare user provided password and password from database
    const verifiedPassword = await bcrypt.compare(password, dbPassword.rows[0].password);
    console.log(verifiedPassword)
    if(!verifiedPassword){
      //if passwords don't match, return incorrect password message back to client
      console.log('password is incorrect')
      return res.status(200).send({message: "username or password does not exist"})
    }
  } else {
    //if username does not exist in db, send message back to client
    console.log("username does not exist")
    return res.status(200).send({message:"username or password does not exist"});
  }
  //if provided username and password are correct, move on to next middleware
  console.log('login successful!')
    return next();
    
  }
  catch(err){
    return next({
        log: `loginController.userLogin: ERROR: ${err}`,
        message: {err: 'Unable to login. Please try again'}
      });
    };
}




module.exports = loginController;