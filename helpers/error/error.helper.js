const parseErrors = (errs) => {
    return errs.map(err => ({
        field: err.context.key,
        message: err.message
    }))
}

module.exports = {
    parseErrors
}
