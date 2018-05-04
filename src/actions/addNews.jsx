import * as types from '../constants/newsTypes';

export function addNews(title, message) {
  return {
    type: types.ADD_NEWS,
    // payload: {
    //   id: Date.now(),
    //   title,
    //   message,
    // },
    id: Date.now(),
    title,
    message,
  };
}
