import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import NewsReducer from './news';
import NewsCatReducer from './newsCat';
import flashMessages from './flashMessages';

const reducers = combineReducers({
  routing: routerReducer,
  news: NewsReducer,
  news_categories: NewsCatReducer,
  messages: flashMessages,
});

export default reducers;
