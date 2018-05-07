import * as types from '../constants/newsTypes';

const initialState = [{ id: 0, title: 'Test news #1', message: 'Some description...' },
  { id: 1, title: 'Test news #2', message: 'Some description...' },
  { id: 2, title: 'Test news #3', message: 'Some description...' },
  { id: 3, title: 'Test news #4', message: 'Some description...' },
  { id: 4, title: 'Test news #5', message: 'Some description...' }];

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
    case types.LOAD_NEWS_ENTRY: // eslint-disable-line no-case-declarations
      const findID = action.id;
      return [...state.filter((ent) => ent.id === findID)];
    default:
      return state;
  }
}

export default NewsReducer;
