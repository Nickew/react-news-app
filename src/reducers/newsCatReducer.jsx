import * as types from '../constants/newsCatTypes';

const initialState = [
  { id: 0, url: 'test1', name: 'Test category #1' },
  { id: 1, url: 'test2', name: 'Test category #2' },
];

function NewsCatReducer(state = initialState, action) {
  switch (action.type) {
    case types.ADD_CATEGORY:
      return [
        ...state,
        { id: action.payload.id, title: action.payload.name, url: action.payload.url },
      ];
    default:
      return state;
  }
}

export default NewsCatReducer;
