
export const composeValidators = (...validators) => value =>
    validators.reduce((error, validator) => error || validator(value), undefined)

export const required = (value) =>{
    return value ? undefined : 'Field is empty';
}

export const maxLengthCreator = (maxLength) => (value) =>{
    debugger;
    return value.length > maxLength ? `Max length is ${maxLength} symbols` : undefined;
}

