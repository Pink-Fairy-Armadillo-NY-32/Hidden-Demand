const db = require('../models/signupModel');
const campaigns = {};

campaigns.getAllCampaigns = async (req, res, next) => {
  const text = 'SELECT * FROM CAMPAIGN';
  const { rows } = await db.query(text);
  res.locals.campaigns = rows[0];
  return next();
}

module.exports = campaigns;
