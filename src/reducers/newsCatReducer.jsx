import * as types from '../constants/newsCatTypes';

const initialState = [
  { id: 0, name: 'Test category #1' },
  { id: 1, name: 'Test category #2' },
];

function newsCatReducer(state = initialState, action) {
  switch (action.type) {
    case types.ADD_CATEGORY:
      return [
        ...state,
        { id: action.payload.id, title: action.payload.name },
      ];
    default:
      return state;
  }
}

export default newsCatReducer;
