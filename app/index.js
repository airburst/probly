import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import routes from './routes';
import configureStore from './store/configureStore';
import './app.global.css';
import * as FeedbackActions from './actions/feedback';
const firebase = require('firebase');

// Setup Firebase
const config = {
  apiKey: 'AIzaSyDzuk7Y6AFa_mVJ821wCv48QtSeXPzyKSc',
  authDomain: 'probly-36ae1.firebaseapp.com',
  databaseURL: 'https://probly-36ae1.firebaseio.com',
  storageBucket: 'probly-36ae1.appspot.com',
};
const fb = firebase.initializeApp(config);
const ref = fb.database().ref('mylife/400');

const store = configureStore();
const history = syncHistoryWithStore(hashHistory, store);

ref.on('value', (data) => {
  // emptyTable(table);
  const feedback = [];
  data.forEach((row) => {
    const item = Object.assign({}, row.val());
    item.key = row.key;
    feedback.push(item);
  });
  store.dispatch(FeedbackActions.setFeedback(feedback));
});

render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('root')
);
