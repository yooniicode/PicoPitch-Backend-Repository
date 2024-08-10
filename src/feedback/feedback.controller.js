import FeedbackModel from './feedback.model';

class FeedbackController {
    static async createFeedback(req, res) {
        try {
            // 요청 데이터에서 피드백 생성
            const feedbackId = await FeedbackModel.createFeedback(req.body);
            // 성공적으로 생성되었을 때의 응답
            res.status(201).json({ feedbackId });
        } catch (err) {
            // 서버 로그에 오류 메시지 출력
            console.error('Error creating feedback:', err);
            // 클라이언트에 오류 메시지 반환
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    static async deleteFeedback(req, res) {
        try {
            // 피드백 삭제
            await FeedbackModel.deleteFeedback(req.params.id);
            // 삭제 성공 시 빈 응답
            res.status(204).send();
        } catch (err) {
            // 서버 로그에 오류 메시지 출력
            console.error('Error deleting feedback:', err);
            // 클라이언트에 오류 메시지 반환
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    static async getPresentationStatistics(req, res) {
        try {
            // 프레젠테이션 통계 가져오기
            const stats = await FeedbackModel.getPresentationStatistics(req.params.presentationId);
            // 통계 성공적으로 반환
            res.status(200).json(stats);
        } catch (err) {
            // 서버 로그에 오류 메시지 출력
            console.error('Error getting presentation statistics:', err);
            // 클라이언트에 오류 메시지 반환
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    static async getFeedbackByPresentationId(req, res) {
        try {
            // 프레젠테이션 ID로 피드백 가져오기
            const feedbacks = await FeedbackModel.getFeedbackByPresentationId(req.params.presentationId);
            // 피드백 성공적으로 반환
            res.status(200).json(feedbacks);
        } catch (err) {
            // 서버 로그에 오류 메시지 출력
            console.error('Error getting feedback by presentation ID:', err);
            // 클라이언트에 오류 메시지 반환
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}

export default FeedbackController;
