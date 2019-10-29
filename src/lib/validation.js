function minLengthError(value, params) {
    const {
        minLength = 8,
        message = 'Error in length validation'
    } = params;

    if (value && value.length < minLength) {
        return message;
    }

    return null;
}

export {
    minLengthError
}