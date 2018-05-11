import * as types from '../constants/newsTypes';

export function addNews(category, title, message) {
  return {
    type: types.ADD_NEWS,
    payload: {
      id: Date.now(),
      category,
      title,
      message,
    },
  };
}
