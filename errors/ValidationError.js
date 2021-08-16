const
    { ApolloError } = require('apollo-server'),
    CONSTANTS = require('../CONSTANTS')
;

module.exports = class ValidationError extends ApolloError {
    constructor(message, caller = null) {
        super(message, CONSTANTS.ERRORS.VALIDATION_ERROR);
        this.caller = caller;

        Object.defineProperty(this, 'name', { value: CONSTANTS.ERRORS.VALIDATION_ERROR });
    }

}