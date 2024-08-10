import express from 'express';
import FeedbackController from './feedback.controller';

export const feedbackRoute = express.Router();

feedbackRoute.post('/', FeedbackController.createFeedback);
feedbackRoute.delete('/:id', FeedbackController.deleteFeedback);
feedbackRoute.get('/presentation/:presentationId/statistics', FeedbackController.getPresentationStatistics);
feedbackRoute.get('/presentation/:presentationId', FeedbackController.getFeedbackByPresentationId);

