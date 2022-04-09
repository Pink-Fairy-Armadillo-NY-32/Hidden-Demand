const express = require('express');
const signupController = require('../controllers/signupController');
const router = express.Router();


//GET REQUEST TO /signup
router.get('/', (req, res) => {
  return res.status(200).json();
});

//POST REQUEST TO /signup - happens on 'signup button' click. Successful signup redirects to '/' endpoint
router.post('/', signupController.createUser, (req, res) => {
  //sanitize user entered data?
  //hash req.body.password
  //sets a cookie
  //starts a session?
  return res.status(201).json();
});

//UPDATE REQUEST TO /signup
// router.put('/:id', (req, res) => {
//   return res.status(200).json();
// });

//DELETE REQUEST TO /signup
// router.delete('/:id', (req, res) => {
//   return res.status(200).json();
// });

module.exports = router;