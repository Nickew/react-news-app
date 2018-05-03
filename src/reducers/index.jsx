import { combineReducers } from 'redux';

import NewsReducer from './newsReducer';
import BlogReducer from './blogReducer';

const reducers = combineReducers({
  NewsReducer,
  BlogReducer,
});

export default reducers;
