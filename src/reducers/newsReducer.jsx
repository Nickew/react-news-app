import * as types from '../constants/newsTypes';
const filteredState = [];
const initialState = [
  {
    id: 0, category: 'test1', title: 'Test news #1', message: 'Some description...', likes: 0,
  },
  {
    id: 1, category: 'test1', title: 'Test news #2', message: 'Some description...', likes: 0,
  },
  {
    id: 2, category: 'test1', title: 'Test news #3', message: 'Some description...', likes: 0,
  },
  {
    id: 3, category: 'test2', title: 'Test news #4', message: 'Some description...', likes: 0,
  },
  {
    id: 4, category: 'test2', title: 'Test news #5', message: 'Some description...', likes: 0,
  }];

function NewsReducer(state = initialState, action) {
  switch (action.type) {
    case types.ADD_NEWS:
      return [
        ...state,
        {
          id: action.payload.id, category: action.payload.category, title: action.payload.title, message: action.payload.message, likes: 0,
        },
      ];
    case types.REMOVE_NEWS: // eslint-disable-line no-case-declarations
      const newsID = action.id;
      return [...state.filter((ent) => ent.id !== newsID)];
    case types.FILTER_NEWS: // eslint-disable-line no-case-declarations
      const catID = action.id;
      state.forEach((el, index, arr) => {
        if (arr[index].category === catID) {
          filteredState.push(arr[index]);
        } else {
          filteredState.filter((element) => element.category !== catID);
        }
      });
      return filteredState;
    case types.LIKE_NEWS:
      state.forEach((el, index, arr) => {
        if (arr[index].id === action.id) {
          return arr[index].likes += 1;
        }
      });
    default:
      return state;
  }
}

export default NewsReducer;
