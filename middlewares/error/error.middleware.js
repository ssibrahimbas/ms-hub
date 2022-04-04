const {IErrorDataResult, IErrorResult} = require("../../tools/error/error.tool")

/**
 * @description express base error handler middleware
 * @param {any} err any error
 * @param {any} req Express Request Object
 * @param {any} res Express Response Object
 * @param {any} next Express Next Function
 * */
const handleError = (err, req, res, next) => {
    if(err instanceof  IErrorResult || err instanceof IErrorDataResult) {
        return res.status(err.status || 500).send(err);
    }
    return res.status(err.status || 500).send(new IErrorResult({
        message: err.message,
        status: err.status || 500
    }))
}

/**
 * @description error wrapper for async functions
 * @param {Function} asyncFunc wrapped function
 * @return {Function} Express request handler
 * */
const errorWrapper = (asyncFunc) => {
    return (req, res, next) => {
        asyncFunc(req, res, next).catch(next);
    }
}

module.exports = {
    errorWrapper,
    handleError
}
