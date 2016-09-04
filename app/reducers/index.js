import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import counter from './counter';
import feedback from './feedback';

const rootReducer = combineReducers({
  counter,
  feedback,
  routing
});

export default rootReducer;
