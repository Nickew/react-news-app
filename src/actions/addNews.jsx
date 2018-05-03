import * as types from '../constants/newsTypes';

export function addNews(message) {
  return {
    type: types.ADD_NEWS,
    id: Date.now(),
    message,
  };
}
