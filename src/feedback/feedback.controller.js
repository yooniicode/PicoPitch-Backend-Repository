// controller/FeedbackController.js
const FeedbackModel = require('feedback.model');

class FeedbackController {
    static async createFeedback(req, res) {
        try {
            const feedbackId = await FeedbackModel.createFeedback(req.body);
            res.status(201).json({ feedbackId });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    static async deleteFeedback(req, res) {
        try {
            await FeedbackModel.deleteFeedback(req.params.id);
            res.status(204).end();
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    static async getPresentationStatistics(req, res) {
        try {
            const stats = await FeedbackModel.getPresentationStatistics(req.params.presentationId);
            res.status(200).json(stats);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    static async getFeedbackByPresentationId(req, res) {
        try {
            const feedbacks = await FeedbackModel.getFeedbackByPresentationId(req.params.presentationId);
            res.status(200).json(feedbacks);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
}

module.exports = FeedbackController;
