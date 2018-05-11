import * as types from '../constants/newsTypes';
const filteredState = [];
const initialState = [
  {
    id: 0, category: 'test1', title: 'Test news #1', message: 'Some description...', hidden: false,
  },
  {
    id: 1, category: 'test1', title: 'Test news #2', message: 'Some description...', hidden: false,
  },
  {
    id: 2, category: 'test1', title: 'Test news #3', message: 'Some description...', hidden: false,
  },
  {
    id: 3, category: 'test2', title: 'Test news #4', message: 'Some description...', hidden: false,
  },
  {
    id: 4, category: 'test2', title: 'Test news #5', message: 'Some description...', hidden: false,
  }];

function NewsReducer(state = initialState, action) {
  switch (action.type) {
    case types.ADD_NEWS:
      return [
        ...state,
        {
          id: action.payload.id, category: action.payload.category, title: action.payload.title, message: action.payload.message,
        },
      ];
    case types.REMOVE_NEWS: // eslint-disable-line no-case-declarations
      const newsID = action.id;
      return [...state.filter((ent) => ent.id !== newsID)];
    case types.FILTER_NEWS: // eslint-disable-line no-case-declarations
      const catID = action.id; // TODO: ForEach if...else statement, instead of filter bcoz it's doesn't work
      state.forEach((el, index, arr) => {
        if (arr[index].category === catID) {
          filteredState.push(arr[index]);
        } else {
          filteredState.filter((element) => element.category !== catID);
        }
      });
      return filteredState;
    default:
      return state;
  }
}

export default NewsReducer;
