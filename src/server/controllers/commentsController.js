const db = require('../models/signupModel');
const comments = {};


// GET to user_comments table using campaign id
comments.getCommentsByCampaignId = async (req, res, next) => {
  const { id } = req.params;
  const text = `SELECT user_comments.*, users.username FROM user_comments INNER JOIN users ON user_comments.user_id = users.user_id WHERE campaign_id = ${id}`;
  
  const response = await db.query(text);
  const rows = response.rows;

  console.log(rows)
  res.locals.comments = rows;
  /** TODO: Add error handling */
  return next();
}

// POST to comments table using campaign id
comments.createComments = async (req, res, next) => {
  const { id } = req.params;
  const { user_id } = req.cookies;
  const { comment } = req.body;

  try {
    const text = 'INSERT INTO USER_COMMENTS(comment, campaign_id, user_id) VALUES($1, $2, $3) RETURNING *';
    const params = [ comment, id, user_id ];
    const response = await db.query(text, params);
    /**
     * TODO: Find efficient method of retrieving username from users table
     * to pass along to response object for frontend
     */
    const userText = 'SELECT USERNAME FROM USERS WHERE USER_ID = $1';
    const user = await db.query(userText, [params[2]]);
    res.locals.comment = [ { ...response.rows[0], username: user.rows[0].username } ];
    return next();
  } catch (error) {
    return next({
      log: `commentsController.createComments: ERROR: ${error}`,
      message: {
        err: 'Error creating this comment'
      }
    });
  }
}

module.exports = comments;
