import * as types from '../constants/newsTypes';

const initialState = {
  news: [],
};

function NewsReducer(state = initialState, action) {
  switch (action.type) {
    case types.ADD_NEWS:
      return {
        ...state,
        news: [...state.news, { id: action.payload.id, title: action.payload.title, message: action.payload.message }],
        // { id: action.id, message: action.message },
      };
    case types.REMOVE_NEWS:
      return [
        // ...state,
        // .forEach((i, el, arr) => {
        //   arr.filter((elem) => elem.id !== action.id);
        // }),
      ];
    default:
      return state;
  }
}

export default NewsReducer;
