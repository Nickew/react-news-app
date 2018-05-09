import * as types from '../constants/newsTypes';

export function showCatNews(id) {
  return {
    type: types.FILTER_NEWS,
    id,
  };
}
