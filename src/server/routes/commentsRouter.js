const express = require('express');
const commentController = require('../controllers/commentsController');
const router = express.Router();

/**
 * Routers for 'campaigns/comments/
 */

router.get('/:id', commentController.getCommentsByCampaignId, (req, res) => {
  return res.status(200).json(res.locals.comments);
});

router.post('/:id', commentController.createComments, (req, res, next) => {
  return res.status(201).json(res.locals.comment);
});

module.exports = router;
