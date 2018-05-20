import * as types from '../constants/flashMessageTypes';

export default (state = [], action) => {
  switch (action.type) {
    case types.ADD_FLASH_MESSAGE:
      return [
        ...state,
        {
          id: Date.now(),
          type: action.message.type,
          text: action.message.text,
        },
      ];
    case types.DELETE_FLASH_MESSAGE:
      return [...state.filter((message) => message.id !== action.id)];
    default:
      return state;
  }
};
