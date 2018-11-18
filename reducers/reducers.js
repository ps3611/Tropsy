import { combineReducers } from 'redux';
import apiReducers from './apiReducers.js';
import rankingsPageReducer from './page/rankingsPageReducer.js';


export default combineReducers({
  api: apiReducers,
  scorePage: rankingsPageReducer,
});
