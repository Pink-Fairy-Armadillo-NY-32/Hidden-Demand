const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController');
const cookieController = require('../controllers/cookieController')
const sessionController = require('../controllers/sessionController')


//POST REQUEST TO /login - happens on 'login button' click. 
router.post('/', loginController.userLogin, sessionController.createSession, cookieController.setCookie, (req, res) => {
  //sets a cookie
  //starts a session?
  return res.status(200).json({user_id: res.locals.user_id, username: res.locals.username});
});

module.exports = router;
