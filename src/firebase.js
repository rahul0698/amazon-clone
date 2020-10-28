// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyBXFcs8APXTF-wh5DTrD8YqeiVSG6sldGI",
    authDomain: "clone-3aaab.firebaseapp.com",
    databaseURL: "https://clone-3aaab.firebaseio.com",
    projectId: "clone-3aaab",
    storageBucket: "clone-3aaab.appspot.com",
    messagingSenderId: "179530246407",
    appId: "1:179530246407:web:2cd6446dd20f1a35013da2",
    measurementId: "G-YD241CXK2Z"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };