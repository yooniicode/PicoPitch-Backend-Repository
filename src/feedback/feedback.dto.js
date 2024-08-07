// dto/FeedbackDTO.js
class FeedbackDTO {
    constructor(id, presentationId, keyword, success, decibelLevel, speed, createdAt) {
        this.id = id;
        this.presentationId = presentationId;
        this.keyword = keyword;
        this.success = success;
        this.decibelLevel = decibelLevel;
        this.speed = speed;
        this.createdAt = createdAt;
    }
}

module.exports = FeedbackDTO;

// dto/PresentationDTO.js
class PresentationDTO {
    constructor(id, title, createdAt) {
        this.id = id;
        this.title = title;
        this.createdAt = createdAt;
    }
}

module.exports = PresentationDTO;
