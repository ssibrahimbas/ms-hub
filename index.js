const _cryptoHelper = require("./helpers/crypto/crpyto.helper");
const _errorHelper = require("./helpers/error/error.helper");
const _errorMiddleware = require("./middlewares/error/error.middleware");
const _validationMiddleware = require("./middlewares/validator/validator.middleware");
const _error = require("./tools/error/error.tool");
const _http = require("./tools/http/http.tool")
const _result = require("./tools/result/result.tool")

const useHub = () => {
    global.CryptoHelper = _cryptoHelper;
    global.ErrorHelper = _errorHelper;
    global.IError = _error.IError;
    global.IErrorData = _error.IErrorData;
    global.IHttp = _http;
    global.IResult = _result.IResult;
    global.IErrorResult = _result.IErrorResult;
    global.IDataResult = _result.IDataResult;
    global.ISuccessResult = _result.ISuccessResult;
    global.ISuccessDataResult = _result.ISuccessDataResult;
    global.IErrorDataResult = _result.IErrorDataResult;
}

module.exports = {
    useHub,
    ErrorMiddleware: _errorMiddleware,
    ValidationMiddleware: _validationMiddleware
}