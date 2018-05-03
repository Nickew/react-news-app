import * as types from '../constants/blogTypes';

export function blogAction(title, message) {
  return {
    type: types.ADD_BLOG,
    payload: {
      title,
      message,
    },
  };
}
