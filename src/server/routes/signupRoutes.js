const express = require('express');
const router = express.Router();


//GET REQUEST TO /signup
router.get('/', (req, res) => {
  return res.status(200).json();
});

//POST REQUEST TO /signup
router.post('/', (req, res) => {
  return res.status(200).json();
});

//UPDATE REQUEST TO /signup
router.put('/:id', (req, res) => {
  return res.status(200).json();
});

//DELETE REQUEST TO /signup
router.delete('/:id', (req, res) => {
  return res.status(200).json();
});

module.exports = router;