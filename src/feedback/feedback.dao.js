import { pool } from '../../config/db.connect';

class FeedbackDAO {
    static async createFeedback(feedbackDTO) {
        const { presentationId, keyword, success, decibelLevel, speed } = feedbackDTO;
        const [result] = await pool.execute(
            `INSERT INTO Feedback (presentation_id, keyword, success, decibel_level, speed)
             VALUES (?, ?, ?, ?, ?)`,
            [presentationId, keyword, success, decibelLevel, speed]
        );
        return result.insertId;
    }

    static async deleteFeedback(id) {
        await pool.execute(`DELETE FROM Feedback WHERE id = ?`, [id]);
    }

    static async getFeedbackByPresentationId(presentationId) {
        const [rows] = await pool.execute(`SELECT * FROM Feedback WHERE presentation_id = ?`, [presentationId]);
        return rows;
    }

    static async getSuccessRate(presentationId) {
        const [rows] = await pool.execute(
            `SELECT (SUM(success) / COUNT(*)) * 100 AS success_rate FROM Feedback WHERE presentation_id = ?`,
            [presentationId]
        );
        return rows[0]?.success_rate || 0;
    }

    static async getKeywords(presentationId) {
        const [rows] = await pool.execute(`SELECT keyword, success FROM Feedback WHERE presentation_id = ?`, [presentationId]);
        return rows;
    }

    static async getDecibelStats(presentationId) {
        const [rows] = await pool.execute(
            `SELECT AVG(decibel_level) AS avg_decibel, MAX(decibel_level) AS max_decibel, MIN(decibel_level) AS min_decibel 
             FROM Feedback WHERE presentation_id = ?`,
            [presentationId]
        );
        return rows[0] || { avg_decibel: null, max_decibel: null, min_decibel: null };
    }

    static async getAverageSpeed(presentationId) {
        const [rows] = await pool.execute(`SELECT AVG(speed) AS avg_speed FROM Feedback WHERE presentation_id = ?`, [presentationId]);
        return rows[0]?.avg_speed || null;
    }
}

export default FeedbackDAO;
