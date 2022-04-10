const db = require('../models/signupModel');
const comments = {};

comments.getCommentsByCampaignId = async (req, res, next) => {
  const { id } = req.params;
  const text = 'SELECT COMMENT FROM USER_COMMENTS WHERE CAMPAIGN_ID = $1';
  const { rows } = await db.query(text, [id]);
  res.locals.comments = rows;
  return next();
}

module.exports = comments;
