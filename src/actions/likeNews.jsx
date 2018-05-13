import * as types from '../constants/newsTypes';

export function likeNews(likes) {
  return {
    type: types.LIKE_NEWS,
    payload: {
      id: Date.now(),
      likes,
    },
  };
}
