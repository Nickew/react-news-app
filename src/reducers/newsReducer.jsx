import * as types from '../constants/newsTypes';

const initialState = [];
// {[32:{}]}
function NewsReducer(state = initialState, action) {
  switch (action.type) {
    case types.ADD_NEWS:
      return [
        ...state,
        { payload: action.payload },
      ];
      // return {
      //   ...state,
      //   news: [...state.news, action.payload],
      // };
      // { id: action.id, message: action.message },
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
