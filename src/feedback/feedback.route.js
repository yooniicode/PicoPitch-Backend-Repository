// routes/feedback.js
const express = require('express');
const feedbackRoute = express.Router();
const FeedbackController = require('feedback.controller');

feedbackRoute.post('/', FeedbackController.createFeedback);
feedbackRoute.delete('/:id', FeedbackController.deleteFeedback);
feedbackRoute.get('/presentation/:presentationId/statistics', FeedbackController.getPresentationStatistics);
feedbackRoute.get('/presentation/:presentationId', FeedbackController.getFeedbackByPresentationId);

module.exports = feedbackRoute;
