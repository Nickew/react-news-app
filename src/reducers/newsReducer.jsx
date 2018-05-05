import * as types from '../constants/newsTypes';

const initialState = [];

function NewsReducer(state = initialState, action) {
  switch (action.type) {
    case types.ADD_NEWS:
      return [
        ...state,
        { id: action.payload.id, title: action.payload.title, message: action.payload.message },
      ];
    case types.REMOVE_NEWS: // eslint-disable-line no-case-declarations
      const newsID = action.id;
      return [...state.filter((ent) => ent.id !== newsID)];
    default:
      return state;
  }
}

export default NewsReducer;
