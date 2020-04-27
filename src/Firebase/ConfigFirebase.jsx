import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore'

// Llave de firebase para poder acceder a la base de datos que tenemos en ella 
const firebaseConfig = {
  apiKey: "AIzaSyA9iPpEj17FzQzaUGcsNqSjc_SeWJ62ByM",
  authDomain: "beer-me-up-app.firebaseapp.com",
  databaseURL: "https://beer-me-up-app.firebaseio.com",
  projectId: "beer-me-up-app",
  storageBucket: "beer-me-up-app.appspot.com",
  messagingSenderId: "183550811494",
  appId: "1:183550811494:web:d3d34343810c5dd474fca7"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore(); // Conectamos firebase con firestore
const auth = firebase.auth();
export { db, firebase, auth }