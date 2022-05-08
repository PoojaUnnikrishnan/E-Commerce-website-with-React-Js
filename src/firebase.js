import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbuIuY0se-Af1zpgS-zcMzZ6nD3Rc_lRA",
  authDomain: "fir-e3a5d.firebaseapp.com",
  projectId: "fir-e3a5d",
  storageBucket: "fir-e3a5d.appspot.com",
  messagingSenderId: "846267714089",
  appId: "1:846267714089:web:4cbc233b500db33da2aa38",
  measurementId: "G-DWKQKWRZ2Y",
};
//initialize firebase app
const firebaseApp = firebase.initializeApp(firebaseConfig);
// initialize database
const db = firebaseApp.firestore();
//variable for authentication
const auth = firebase.auth();

export { db, auth };
