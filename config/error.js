export class BaseError extends Error {
    constructor(data = { status: 500, isSuccess: false, code: 1000, message: 'An error occurred' }) {
        super(data.message);
        this.data = data;
    }
}