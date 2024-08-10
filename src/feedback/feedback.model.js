import FeedbackDAO from './feedback.dao';

class FeedbackModel {
    static async createFeedback(data) {
        try {
            // 현재 시간 가져오기
            const now = new Date().toISOString();

            // 요청 데이터에 현재 시간 추가
            const feedbackData = {
                ...data,
                created_at: now,
                updated_at: now
            };

            const feedbackId = await FeedbackDAO.createFeedback(feedbackData);
            return feedbackId;
        } catch (err) {
            throw new Error(err.message);
        }
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

export default FeedbackModel;
