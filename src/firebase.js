// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyAijIz6xE_Sg5HLmx672pyy8HDJ8UxEYvk",
    authDomain: "clone-58c4f.firebaseapp.com",
    databaseURL: "https://clone-58c4f.firebaseio.com",
    projectId: "clone-58c4f",
    storageBucket: "clone-58c4f.appspot.com",
    messagingSenderId: "551599708779",
    appId: "1:551599708779:web:ab427ddf3007fe20c06f2e",
    measurementId: "G-6LBZFL8YJK"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };