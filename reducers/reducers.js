import { combineReducers } from 'redux';
import apiReducers from './apiReducers.js';
import settingsReducers from './settingsReducers.js';
import rankingsPageReducer from './page/rankingsPageReducer.js';


export default combineReducers({
  api: apiReducers,
  settings: settingsReducers,
  rankingsPage: rankingsPageReducer,
});
