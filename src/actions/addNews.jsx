import * as types from '../constants/newsTypes';

const uid = () => Math.random().toString(34).slice(2);

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
