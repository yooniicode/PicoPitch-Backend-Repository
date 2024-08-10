class FeedbackDTO {
    constructor(id, presentationId, keyword, success, decibelLevel, speed, created_at) {
        this.id = id;
        this.presentationId = presentationId;
        this.keyword = keyword;
        this.success = success;
        this.decibelLevel = decibelLevel;
        this.speed = speed;
        this.created_at = createdAt;
    }
}

export default FeedbackDTO;
