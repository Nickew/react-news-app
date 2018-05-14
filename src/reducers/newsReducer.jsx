import * as types from '../constants/newsTypes';

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
  },
];

function NewsReducer(state = initialState, action) {
  switch (action.type) {
    case types.ADD_NEWS:
      return [
        ...state,
        {
          id: action.payload.id, category: action.payload.category, title: action.payload.title, message: action.payload.message, likes: 0,
        },
      ];
    case types.REMOVE_NEWS:
      return [...state.filter((ent) => ent.id !== action.payload.id)];
    case types.LIKE_NEWS:
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            likes: item.likes + 1,
          };
        }
        return item;
      });
    default:
      return state;
  }
}

export default NewsReducer;
