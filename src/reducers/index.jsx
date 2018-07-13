import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import NewsReducer from './news';
import NewsCatReducer from './newsCat';
import flashMessages from './flashMessages';
import SignUpReducer from './signup';

const reducers = combineReducers({
  routing: routerReducer,
  news: NewsReducer,
  news_categories: NewsCatReducer,
  messages: flashMessages,
  user: SignUpReducer,
});

export default reducers;
