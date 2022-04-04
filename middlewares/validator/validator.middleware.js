const {IErrorDataResult} = require("../../tools/error/error.tool")
const {IHttp} = require("../../tools/http/http.tool");
const ErrorHelper = require("../../helpers/error/error.helper")

/**
 * @param @type RunValidatorParam
 * @description Takes a joi schema and an object. If the schema validates the object, it's fine. Returns an error if validation fails.
 */
const runValidator = ({schema, object}) => {
    const {error} = schema.validate(object);
    if(error) {
        return new IErrorDataResult({
            status: IHttp.StatusBadRequest,
            message: "ValidationError",
            data: ErrorHelper.parseErrors(error.details)
        })
    }
}

/**
 * @param {object} params
 * @param {function} params.schema function that returns joi schema to validate request
 * @param {string?} params.from
 * @description It checks the body values of the request against the given schema. If there is an error, it notifies the next function, otherwise it continues.
 * @return express.RequestHandler
 * */
const validate = ({schema, from = "body"}) => {
    return (req, res, next) => {
        const error = runValidator({schema, object: req[from] || {}});
        if(error) return next(error);
        return next();
    }
}

module.exports = {
    validate
}
