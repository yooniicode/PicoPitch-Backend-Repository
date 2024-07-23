// response.js

export const response = ({ isSuccess, code, message }, result) => {
    return {
        isSuccess,
        code,
        message,
        result
    };
};
