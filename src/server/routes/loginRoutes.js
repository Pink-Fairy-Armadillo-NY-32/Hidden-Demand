const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController');


//GET REQUEST TO /login
router.get('/',  (req, res) => {
  return res.status(200).json();
});

//POST REQUEST TO /login - happens on 'login button' click. Successful login redirects to '/' endpoint
router.post('/', loginController.userLogin, (req, res) => {
  //sets a cookie
  //starts a session?
  return res.status(201).json();
});

//UPDATE REQUEST TO /login
// router.put('/:id', (req, res) => {
//   return res.status(200).json();
// });

//DELETE REQUEST TO /login
// router.delete('/:id', (req, res) => {
//   return res.status(200).json();
// });

module.exports = router;