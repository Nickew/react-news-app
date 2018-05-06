import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import NewsReducer from './newsReducer';

const reducers = combineReducers({
  routing: routerReducer,
  news: NewsReducer,
});

export default reducers;
