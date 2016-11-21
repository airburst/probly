const firebase = require('firebase');

const config = {
  apiKey: 'AIzaSyDzuk7Y6AFa_mVJ821wCv48QtSeXPzyKSc',
  authDomain: 'probly-36ae1.firebaseapp.com',
  databaseURL: 'https://probly-36ae1.firebaseio.com'
};
const Firebase = firebase.initializeApp(config);
const fireDB = Firebase.database().ref('mylife/4-0-0');

// Connect to Firebase Ref and dispatch updates to app on changes
export function connect(callback) {
  fireDB.on('value', data => callback(filterItems(data)));
}

export function notifyAdded(callback) {
  fireDB.on('child_added', data => callback(data));
}

const filterItems = (data) => {
  const feedback = [];
  data.forEach((row) => {
    const item = Object.assign({}, row.val());
    item.key = row.key;
    feedback.push(item);
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
