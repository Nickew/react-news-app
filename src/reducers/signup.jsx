import * as types from '../constants/signupTypes';

const initialState = {};

const SignUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SIGNUP_SUCCESS:
      return {
        ...state,
        logged: true,
        uid: action.user.uid,
      };
    case types.SIGNUP_FAILURE:
      return {
        ...state,
        logged: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default SignUpReducer;
