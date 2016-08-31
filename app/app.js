//import os from 'os';
//import env from './env';
import {remote} from 'electron';
import jetpack from 'fs-jetpack';
import {setDomValue, showElement, hideElement} from './ui';
import {timeStamp} from './utils';
import {showDetails} from './details-view';
var firebase = require("firebase");

let app = remote.app;
let appDir = jetpack.cwd(app.getAppPath());

// Setup Firebase
var config = {
    apiKey: "AIzaSyDzuk7Y6AFa_mVJ821wCv48QtSeXPzyKSc",
    authDomain: "probly-36ae1.firebaseapp.com",
    databaseURL: "https://probly-36ae1.firebaseio.com",
    storageBucket: "probly-36ae1.appspot.com",
};
let fb = firebase.initializeApp(config);
let ref = fb.database().ref('mylife/400');

// Main
document.addEventListener('DOMContentLoaded', () => {
    const table = document.getElementById('problems-table-body');

    ref.on('value', (data) => {
        emptyTable(table);
        data.forEach((row) => {
            addRow(table, row.key, row.val());
        })
    });
});

let emptyTable = (el) => {
    while (el.firstChild) { el.removeChild(el.firstChild); }
}

let addRow = (el, i, v) => {
    let tr = createRow(i);
    tr.appendChild(createField(v.site));
    tr.appendChild(createField(v.feedback));
    tr.appendChild(createField(v.url));
    tr.appendChild(createField(v.viewport));
    tr.appendChild(createField(v.browser));
    tr.appendChild(createField(v.dateRaised));
    tr.appendChild(createField(v.categories));
    tr.appendChild(createField(v.notes));
    tr.appendChild(createField(v.status));
    tr.addEventListener('click', showDetails.bind(this, i, v), false);
    el.appendChild(tr);
}

let createRow = (id) => {
    let tr = document.createElement('tr');
    tr.id = id;
    return tr;
}

let createField = (item) => {
    let td = document.createElement('td'),
        content = document.createTextNode(item);
    td.appendChild(content);
    return td;
}


// let addItem = () => {
//     ref.push({
//         "site": "Telford",
//         "feedback": "When I click on my account name (top right corner) there is a drop down box with text that is white on white I think and unable to read it.",
//         "url": "http://telford.mylifetest.co.uk/search/mypad.aspx",
//         "viewport": "Desktop",
//         "browser": "Chrome : 43.0 : 43 : 0",
//         "dateRaised": timeStamp,
//         "categories": "Theme",
//         "status": "Theme",
//         "notes": ""
//     });
// }
