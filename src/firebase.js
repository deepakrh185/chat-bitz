import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCGEk3GNd7cpDcbyzETAU3p01OaM5gpjxQ",
  authDomain: "deepak-what-sappclone.firebaseapp.com",
  projectId: "deepak-what-sappclone",
  storageBucket: "deepak-what-sappclone.appspot.com",
  messagingSenderId: "642482380675",
  appId: "1:642482380675:web:5eeaee64eb738e8cfe20b6",
  measurementId: "G-S8M3V9B52R",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
