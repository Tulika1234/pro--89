import firebase from "firebase"
require ("@firebase/firestore")

  var firebaseConfig = {
    apiKey: "AIzaSyCbJ2G4GXWazX_ngrzPsTCguFNtLrqHuPQ",
    authDomain: "barter-f5b94.firebaseapp.com",
    projectId: "barter-f5b94",
    storageBucket: "barter-f5b94.appspot.com",
    messagingSenderId: "126903607281",
    appId: "1:126903607281:web:d93c448fb0ca95fa08ae50"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()