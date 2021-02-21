import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAlZ0cT3NXIcWgYbFAPUgp9YliaIVu1bDk",
  authDomain: "prajval-6f03e.firebaseapp.com",
  projectId: "prajval-6f03e",
  storageBucket: "prajval-6f03e.appspot.com",
  messagingSenderId: "1079365330587",
  appId: "1:1079365330587:web:095f0d3609a71d6ed3c83e",
  measurementId: "G-FKF9QKB224"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
