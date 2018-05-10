import * as types from '../constants/newsCatTypes';

export function addNews(name, url) {
  return {
    type: types.ADD_CATEGORY,
    payload: {
      id: Date.now(),
      name,
      url,
    },
  };
}
