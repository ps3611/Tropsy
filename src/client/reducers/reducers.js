import { combineReducers } from 'redux';
import apiReducers from './apiReducers';
import settingsReducers from './settingsReducers';
import rankingsPageReducer from './page/rankingsPageReducer';


export default combineReducers({
  api: apiReducers,
  settings: settingsReducers,
  rankingsPage: rankingsPageReducer,
});
