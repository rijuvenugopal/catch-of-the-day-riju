import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCMgoGPPKQ7WkNeAYRLOoGZy4uTyuitiWs",
    authDomain: "catch-of-the-day-riju.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-riju.firebaseio.com"
})

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp }

// This is a default export
export default base;