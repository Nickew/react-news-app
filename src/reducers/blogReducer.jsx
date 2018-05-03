import * as types from '../constants/blogTypes';

const initialState = { // eslint-disable-line
  blog: [],
  added: false,
  error: null,
};

function BlogReducer(state = initialState, action) {
  switch (action.type) {
    case types.ADD_BLOG:
      return {
        ...state,
        blog: [...state.blog, action.payload],
      };
    default:
      return state;
  }
}

export default BlogReducer;
