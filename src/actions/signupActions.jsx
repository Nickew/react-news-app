import * as types from '../constants/authTypes';
import { auth } from '../firebase/auth';

export const createNewUser = (email, password) => (dispatch) => {
  auth.createNewUser(email, password)
    .then((response) => dispatch(signUpSuccess(response)))
    .catch((error) => dispatch(signUpFailure(error)));
};

export const signInUser = (email, password) => (dispatch) => {
  auth.signInUser(email, password)
    .then((response) => dispatch(signInSuccess(response)))
    .catch((error) => dispatch(signInFailure(error)));
};

export const signUpSuccess = (response) => ({
  type: types.SIGNUP_SUCCESS,
  user: response,
});

export const signUpFailure = (error) => ({
  type: types.SIGNUP_FAILURE,
  error,
});

export const signInSuccess = (response) => ({
  type: types.SIGNIN_SUCCESS,
  user: response,
});

export const signInFailure = (error) => ({
  type: types.SIGNIN_FAILURE,
  error,
});
