import * as types from '../constants/authTypes';

const initialState = {};

const SignUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SIGNUP_SUCCESS:
      return {
        ...state,
        complete: true,
        uid: action.user.uid,
      };
    case types.SIGNUP_FAILURE:
      return {
        ...state,
        complete: false,
        error: action.error,
      };
    case types.SIGNIN_SUCCESS:
      return {
        ...state,
        complete: true,
        user: action.user,
      };
    case types.SIGNIN_FAILURE:
      return {
        ...state,
        complete: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default SignUpReducer;
