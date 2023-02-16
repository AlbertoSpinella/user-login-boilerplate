export class ErrorResponse extends Error {
    constructor(message, statusCode) {
        message instanceof Object ? super(message.message) && Object.assign(this, message) : super(message);
        this.name = this.constructor.name;
        this.statusCode = statusCode;
    }
}