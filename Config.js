import firebase from 'firebase';
require('@firebase/firestore');

var firebaseConfig = {
    apiKey: "AIzaSyCMNSBzOSo1kUaAnqHW3Ve1DkwJh57zKGU",
    authDomain: "zap-app-5154d.firebaseapp.com",
    projectId: "zap-app-5154d",
    storageBucket: "zap-app-5154d.appspot.com",
    messagingSenderId: "364233787692",
    appId: "1:364233787692:web:6ae7d50bd133b0539f8489",
    measurementId: "G-ZEB7ZPE4DB"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase.firestore();