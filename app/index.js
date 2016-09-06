import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import routes from './routes';
import configureStore from './store/configureStore';
import './app.global.css';
import * as FeedbackActions from './actions/feedback';

const store = configureStore();
const history = syncHistoryWithStore(hashHistory, store);

// Initialise firebase connection
FeedbackActions.initialise();

// Touch Tap Plugin
injectTapEventPlugin();

render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('root')
);

export default store;
