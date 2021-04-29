import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional


  var firebaseApp = firebase.initializeApp({

   
      apiKey: "AIzaSyDUq2gtolRku5G5SP4Ar30MJJabWfHTubc",
      authDomain: "bell-4f7d8.firebaseapp.com",
      projectId: "bell-4f7d8",
      storageBucket: "bell-4f7d8.appspot.com",
      messagingSenderId: "875874890390",
      appId: "1:875874890390:web:e8e27a844eaac4be4288b7",
      measurementId: "G-TB21HCH2H4"
    });
  
  
var db = firebaseApp.firestore(); 

export { db }