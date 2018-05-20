import validator from 'validator';

// https://stackoverflow.com/a/43233163/8916258 lodash.isEmpty alternative
function isEmpty(value) {
  return value === undefined ||
    value === null ||
    (typeof value === 'object' && Object.keys(value).length === 0) ||
    (typeof value === 'string' && value.trim().length === 0);
}

export default function validateInput(data) {
  const errors = {};

  if (validator.isEmpty(data.email)) {
    errors.email = 'Email is required';
  }

  if (!validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }

  if (validator.isEmpty(data.password)) {
    errors.password = 'Password is required';
  }

  if (validator.isEmpty(data.login)) {
    errors.login = 'Login is invalid';
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
}