import * as types from '../constants/newsTypes';

export function likeNews(id) {
  return {
    type: types.LIKE_NEWS,
    payload: {
      id,
    },
  };
}
