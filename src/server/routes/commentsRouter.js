const express = require('express');
const commentController = require('../controllers/commentsController');
const router = express.Router();

router.get('/:id', commentController.getCommentsByCampaignId, (req, res) => {
  return res.status(200).json(res.locals.comments);
});

module.exports = router;
