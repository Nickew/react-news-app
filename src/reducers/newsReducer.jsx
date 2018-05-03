import * as types from '../constants/newsTypes';

const initialState = {
  news: [],
  added: false,
  error: null,
};

function NewsReducer(state = initialState, action) {
  switch (action.type) {
    case types.ADD_NEWS:
      return [
        ...state,
        { id: action.id, message: action.message },
      ];
    case 'UPDATE':
      return [
        ...state,
        { message: action.message },
      ];
    default:
      return state;
  }
}

export default NewsReducer;
