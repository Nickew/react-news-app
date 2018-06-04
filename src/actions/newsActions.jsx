import * as types from '../constants/newsTypes';

export function addNewsEntry(category, title, message) {
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

export function deleteNewsEntry(id) {
  return {
    type: types.REMOVE_NEWS,
    payload: {
      id,
    },
  };
}

export function likeNewsEntry(id) {
  return {
    type: types.LIKE_NEWS,
    payload: {
      id,
    },
  };
}
