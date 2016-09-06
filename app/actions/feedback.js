import { store } from '../index';
const firebase = require('firebase');

export const SET_FEEDBACK = 'SET_FEEDBACK';

const config = {
  apiKey: 'AIzaSyDzuk7Y6AFa_mVJ821wCv48QtSeXPzyKSc',
  authDomain: 'probly-36ae1.firebaseapp.com',
  databaseURL: 'https://probly-36ae1.firebaseio.com',
  storageBucket: 'probly-36ae1.appspot.com',
};
const Firebase = firebase.initializeApp(config);
const fireDB = Firebase.database().ref('mylife/4-0-0');

export function setFeedback(feedback) {
  return {
    type: SET_FEEDBACK,
    payload: feedback
  };
}

export function initialise() {
  fireDB.on('value', (data) => {
    const feedback = [];
    data.forEach((row) => {
      const item = Object.assign({}, row.val());
      item.key = row.key;
      feedback.push(item);
    });
    store.dispatch(setFeedback(feedback));
  });
}
