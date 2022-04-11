const express = require('express');
const signupController = require('../controllers/signupController');
const cookieController = require('../controllers/cookieController')
const sessionController = require('../controllers/sessionController')
const router = express.Router();

//POST REQUEST TO /signup - happens on 'signup button' click. Successful signup redirects to '/' endpoint
router.post('/', signupController.createUser, sessionController.createSession, cookieController.setCookie, (req, res) => {
  return res.status(201).json({user_id: res.locals.user_id, username: res.locals.username});
});


module.exports = router;