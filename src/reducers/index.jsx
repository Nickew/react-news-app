import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import NewsReducer from './newsReducer';
import NewsCatReducer from './newsCatReducer';

const reducers = combineReducers({
  routing: routerReducer,
  news: NewsReducer,
  news_categories: NewsCatReducer,
});

export default reducers;
