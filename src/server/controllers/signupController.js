//require in model?

const signupController = {};

signupController.createUser = async (req, res, next) => {
  const {username, email, password} = req.body;
  try{
    const newUser = await User.create({ username, pin, onClock });
    res.locals.newUser = newUser;
    return next();
  }
  catch(err){
    console.log(err)
    return next({
      log: 'userController.createUser: ERROR',
      message: {err: 'Error occurred in userController.createUser'}
    });
  };
};


module.exports = signupController;