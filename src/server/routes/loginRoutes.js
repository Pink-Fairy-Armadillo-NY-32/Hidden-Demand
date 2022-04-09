const express = require('express');
const router = express.Router();

//GET REQUEST TO /login
router.get('/', (req, res) => {
  return res.status(200).json();
});

//POST REQUEST TO /login
router.post('/', (req, res) => {
  return res.status(200).json();
});

//UPDATE REQUEST TO /login
router.put('/:id', (req, res) => {
  return res.status(200).json();
});

//DELETE REQUEST TO /login
router.delete('/:id', (req, res) => {
  return res.status(200).json();
});

module.exports = router;