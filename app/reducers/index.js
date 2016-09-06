import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import feedback from './feedback';
import settings from './settings';

const rootReducer = combineReducers({
  feedback,
  settings,
  routing
});

export default rootReducer;
