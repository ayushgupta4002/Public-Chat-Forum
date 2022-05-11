// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAcJQdHaUsyq-kW0RDJeObAm8IIyKkgCyQ",
  authDomain: "ipu-interaction.firebaseapp.com",
  projectId: "ipu-interaction",
  storageBucket: "ipu-interaction.appspot.com",
  messagingSenderId: "103801278682",
  appId: "1:103801278682:web:3a09373369161de84295e3",
  measurementId: "G-CVCQMNTNQR"
};
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;