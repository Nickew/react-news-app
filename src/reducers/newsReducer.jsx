import * as types from '../constants/newsTypes';

const initialState = { // eslint-disable-line
  news: [],
  added: false,
  error: null,
};

function NewsReducer(state = initialState, action) {
  switch (action.type) {
    case types.ADD_NEWS:
      return {
        ...state,
        news: [...state.news, action.payload],
      };
    default:
      return state;
  }
}

export default NewsReducer;
