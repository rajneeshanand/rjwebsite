import firebase from 'firebase';

var firebaseApp = firebase.initializeApp({
 
    apiKey: "AIzaSyCi-DPrrRnTmwmlchWygGy1B7Cbc9EDWPI",
    authDomain: "react-contact-data.firebaseapp.com",
    projectId: "react-contact-data",
    storageBucket: "react-contact-data.appspot.com",
    messagingSenderId: "955391674721",
    appId: "1:955391674721:web:b3bef4aae511ee03369d20"
  

});
var db=firebaseApp.firestore();
export { db };