// health.controller.js

export const healthController = (req, res, next) => {
    res.status(200).send("HELLO, I'm Healthy!");
};

export const checkScript = (req, res, next) => {
    res.send("script 내용을 확인해주세요");
};