const User = require('../models/signupModel.js')
const loginController = {};
const bcrypt = require('bcrypt');


loginController.userLogin = async (req, res, next) =>{
  console.log(req.body);
  const { username, password } = req.body;
  //query password from db based on username
  const passwordQuery = `SELECT password ,user_id FROM users WHERE username = $1 `
  
  try{
    //grab saved password from database
    const {rows} = await User.query(passwordQuery,[username]);
    
    console.log(rows)
    if(rows.length>0){
    //if user exists in the database, password will be successfuly retrieved from db
    console.log(rows[0].password);
   
    //compare user provided password and password from database
   
    const verifiedPassword = await bcrypt.compare(password, rows[0].password);
    console.log(verifiedPassword)
    if(!verifiedPassword){
      //if passwords don't match, return incorrect password message back to client
      console.log('password is incorrect')
      return res.status(404).json({message: "username or password does not exist"})
    }
  } else {
    //if username does not exist in db, send message back to client
    console.log("username does not exist")
    return res.status(404).json({message:"username or password does not exist"});
  }
  //if provided username and password are correct, move on to next middleware
  res.locals.user_id = rows[0].user_id
  console.log(res.locals.user_id); //just the user_id
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