const express = require('express');
const campaignsController = require('../controllers/campaignsController');
const router = express.Router();

// GET request to /campaigns
router.get('/', campaignsController.getAllCampaigns, (req, res) => {
  return res.status(200).json(res.locals.campaigns);
});

module.exports = router;
