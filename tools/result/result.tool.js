/**
 * @description base result class
 * @property {number} status
 * @property {boolean} success
 * @property {string} message
 * @property {number?} code
 * */
export class IResult {

    /**
     * @description create a result
     * @param {object} params
     * @param {number} params.status http status code
     * @param {boolean} params.success process is success?
     * @param {string} params.message process message
     * @param {number?} params.code
     * */
    constructor({success, status, message, code}) {
        this.status = status;
        this.success = success;
        this.message = message;
        this.code = code;
    }
}

/**
 * @description base result class with data
 * @property {number} status
 * @property {boolean} success
 * @property {string} message
 * @property {any} data
 * @property {number?} code
 * */
export class IDataResult extends IResult {

    /**
     * @description create a data result
     * @param {object} params
     * @param {number} status http status code
     * @param {boolean} success process is success?
     * @param {string} message process message
     * @param {any} data process returned data
     * @param {number?} code
     * */
    constructor({success, status, message, data, code}) {
        super({success, status, message, code});
        this.data = data;
    }
}

/**
 * @description base result class with success
 * @property {number} status
 * @property {boolean=} success true
 * @property {string} message
 * @param {number?} code
 * */
export class ISuccessResult extends IResult {

    /**
     * @description create a success result
     * @param {object} params
     * @param {number=} params.status http status code
     * @param {string} params.message process message
     * @param {number?} params.code
     * */
    constructor({message, status = 200, code}) {
        super({success: true, message, status, code});
    }
}

/**
 * @description base result class with success and data
 * @property {number} status
 * @property {boolean=} success true
 * @property {string} message
 * @property {any} data
 * @property {number?} code
 * */
export class ISuccessDataResult extends IDataResult {

    /**
     * @description create a success data result
     * @param {object} params
     * @param {number=} params.status http status code
     * @param {string} params.message process message
     * @param {any} params.data process returned data
     * @param {number?} params.code
     * */
    constructor({data, message, status = 200, code}) {
        super({success: true, message, status, data, code});
    }
}

/**
 * @description base result class with error
 * @property {number} status
 * @property {boolean=} success false
 * @property {string} message
 * @property {number?} code
 * */
export class IErrorResult extends IResult {

    /**
     * @description create a error result
     * @param {object} params
     * @param {number=} params.status http status code
     * @param {string} params.message process message
     * @param {number?} params.code
     * */
    constructor({message, status = 400, code}) {
        super({success: false, message, status, code});
    }
}

/**
 * @description base result class with error and data
 * @property {number} status
 * @property {boolean=} success false
 * @property {string} message
 * @property {any} data
 * @property {number?} code
 * */
export class IErrorDataResult extends IDataResult {

    /**
     * @description create a error data result
     * @param {object} params
     * @param {number=} params.status http status code
     * @param {string} params.message process message
     * @param {any} params.data process returned data
     * @param {number?} params.code
     * */
    constructor({data, message, status = 400, code}) {
        super({success: false, message, status, data});
    }
}

module.exports = {
    IResult,
    ISuccessResult,
    ISuccessDataResult,
    IErrorResult,
    IErrorDataResult
}