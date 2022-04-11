const db = require('../models/signupModel');
const comments = {};

comments.getCommentsByCampaignId = async (req, res, next) => {
  const { id } = req.params;
  const text = `SELECT user_comments.*, users.username FROM user_comments INNER JOIN users ON user_comments.user_id = users.user_id WHERE campaign_id = ${id}`;
  const {rows} = await db.query(text);
  
  res.locals.comments = rows;
  
  return next();
}

module.exports = comments;
