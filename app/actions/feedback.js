import store from '../index';

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

// Connect to Firebase Ref and dispatch updates to app on changes
export function initialise() {
  fireDB.on('value', (data) => {
    const feedback = filterOpenItems(data); // Filter Open records
    store.dispatch(setFeedback(feedback));
  });
}

const filterOpenItems = (data) => {
  const feedback = [];
  const filterOpenRecords = store.getState().settings.filterOpenRecords;
  data.forEach((row) => {
    const item = Object.assign({}, row.val());
    item.key = row.key;
    if ((item.status === 'Open') || !filterOpenRecords) { feedback.push(item); }
  });
  return feedback;
};

export function closeItem(key) {
  updateItem(key, { status: 'Closed' });
}

export function openItem(key) {
  updateItem(key, { status: 'Open' });
}

export function updateItem(key, changes) {
  const ref = fireDB.child(key);
  ref.update(changes);
}
