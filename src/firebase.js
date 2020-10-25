import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBNQLKuBUN3b-WoyiByRXnFsMLDeruUTXk",
  authDomain: "clone-38e3b.firebaseapp.com",
  databaseURL: "https://clone-38e3b.firebaseio.com",
  projectId: "clone-38e3b",
  storageBucket: "clone-38e3b.appspot.com",
  messagingSenderId: "963545151779",
  appId: "1:963545151779:web:4d2fcba6495ee8e1af3496",
  measurementId: "G-P091BYZ20V",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
