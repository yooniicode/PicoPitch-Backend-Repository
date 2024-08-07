// model/FeedbackModel.js
const FeedbackDAO = require('feedback.dao.js');
const FeedbackDTO = require('feedback.dto.js');

class FeedbackModel {
    static async createFeedback(data) {
        const feedbackDTO = new FeedbackDTO(null, data.presentationId, data.keyword, data.success, data.decibelLevel, data.speed, null);
        return await FeedbackDAO.createFeedback(feedbackDTO);
    }

    static async deleteFeedback(id) {
        return await FeedbackDAO.deleteFeedback(id);
    }

    static async getPresentationStatistics(presentationId) {
        const successRate = await FeedbackDAO.getSuccessRate(presentationId);
        const keywords = await FeedbackDAO.getKeywords(presentationId);
        const decibelStats = await FeedbackDAO.getDecibelStats(presentationId);
        const avgSpeed = await FeedbackDAO.getAverageSpeed(presentationId);

        return {
            successRate,
            keywords,
            decibelStats,
            avgSpeed
        };
    }

    static async getFeedbackByPresentationId(presentationId) {
        return await FeedbackDAO.getFeedbackByPresentationId(presentationId);
    }
}

module.exports = FeedbackModel;
