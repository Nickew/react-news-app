import * as types from '../constants/newsTypes';

export function removeNews(id) {
  return {
    type: types.REMOVE_NEWS,
    payload: {
      id,
    },
  };
}
