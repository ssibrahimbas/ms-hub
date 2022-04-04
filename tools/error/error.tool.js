/**
 * @description custom error class
 * @property {number} status
 * @property {string} message
 * */
export class IError extends Error {

    /**
     * @description create a custom error
     * @param {object} params
     * @param {string} params.message error message
     * @param {number} params.status error status
     * @param {number?} params.code error code
     * */
    constructor({message, status, code}) {
        super(message);
        this.status = status;
        this.message = message;
        this.code = code;
    }
};

/**
 * @description custom error class with data property
 * @property {number} status
 * @property {string} message
 * @property {any} data
 * */
export class IErrorData extends IError {

    /**
     * @description create a custom error with data property
     * @param {object} params
     * @param {string} params.message error message
     * @param {number} params.status error status
     * @param {any} params.data error data
     * @param {number?} params.code error code
     * */
    constructor({message, status, data, code}) {
        super({message, status, code});
        this.data = data;
    }
};

module.exports = {
    IError,
    IErrorData
}