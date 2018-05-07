import * as types from '../constants/newsTypes';

export function loadNewsEntry(id) {
  return {
    type: types.LOAD_NEWS_ENTRY,
    payload: {
      id,
    },
  };
}
