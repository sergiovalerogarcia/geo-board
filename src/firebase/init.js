import firebase from 'firebase'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDhz5TL1XbWYMfR79NkcjSEV0ff0dSz-iM",
    authDomain: "myfirstapi-5872c.firebaseapp.com",
    databaseURL: "https://myfirstapi-5872c.firebaseio.com",
    projectId: "myfirstapi-5872c",
    storageBucket: "myfirstapi-5872c.appspot.com",
    messagingSenderId: "904675161876",
    appId: "1:904675161876:web:8780bfea0ad09e2dbaf401"
};

// Initialize Firebase

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();