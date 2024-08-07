// routes/feedback.js
const express = require('express');
const router = express.Router();
const FeedbackController = require('feedback.controller');

router.post('/', FeedbackController.createFeedback);
router.delete('/:id', FeedbackController.deleteFeedback);
router.get('/presentation/:presentationId/statistics', FeedbackController.getPresentationStatistics);
router.get('/presentation/:presentationId', FeedbackController.getFeedbackByPresentationId);

module.exports = router;
