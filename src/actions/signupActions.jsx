import * as types from '../constants/signupTypes';
import { auth } from '../firebase/auth';

export const createNewUser = (email, password) => (dispatch) => {
  auth.createNewUser(email, password)
    .then((response) => dispatch(signUpSuccess(response)))
    .catch((error) => dispatch(signUpFailure(error)));
};

export const signUpSuccess = (response) => ({
  type: types.SIGNUP_SUCCESS,
  user: response,
});

export const signUpFailure = (error) => ({
  type: types.SIGNUP_FAILURE,
  error,
});
