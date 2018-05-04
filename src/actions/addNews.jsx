import * as types from '../constants/newsTypes';

const uid = Date.now();

export function addNews(title, message) {
  return {
    type: types.ADD_NEWS,
    payload: {
      id: uid,
      title,
      message,
    },
  };
}
