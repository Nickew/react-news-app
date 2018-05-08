import * as types from '../constants/newsCatTypes';

export function addNews(name) {
  return {
    type: types.ADD_CATEGORY,
    payload: {
      id: Date.now(),
      name,
    },
  };
}
