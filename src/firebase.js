import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCTS28v7z3bUZ9vWSW01PLfJfWxH3Pghss",
  authDomain: "deepak-whatsapp-clone.firebaseapp.com",
  projectId: "deepak-whatsapp-clone",
  storageBucket: "deepak-whatsapp-clone.appspot.com",
  messagingSenderId: "733755409603",
  appId: "1:733755409603:web:30c675dedae31c320c0e76",
  measurementId: "G-PH8CK7Y831"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
