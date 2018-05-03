import * as types from '../constants/newsTypes';

export function newsAction(title, message) {
  return {
    type: types.ADD_NEWS,
    payload: {
      title,
      message,
    },
  };
}
