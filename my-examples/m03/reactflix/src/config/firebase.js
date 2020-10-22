import firebase from 'firebase/app';
import 'firebase/database'

firebase.initializeApp({
  apiKey: "AIzaSyC_nxbXlpE2OcdsYJ7I2WcwhvSqJCitQuM",
  authDomain: "reactflix-5addf.firebaseapp.com",
  databaseURL: "https://reactflix-5addf.firebaseio.com",
  projectId: "reactflix-5addf",
  storageBucket: "reactflix-5addf.appspot.com",
  messagingSenderId: "750152274317",
  appId: "1:750152274317:web:0d26b8780e4153cb1fedc4",
  measurementId: "G-EX13MW2SM3"
});

const db = firebase.database();

export { db };
