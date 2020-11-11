import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPvvISoJQe-xGYlI7bMJYowdJLmFkrF2g",
  authDomain: "imes-clone.firebaseapp.com",
  databaseURL: "https://imes-clone.firebaseio.com",
  projectId: "imes-clone",
  storageBucket: "imes-clone.appspot.com",
  messagingSenderId: "54840316900",
  appId: "1:54840316900:web:79124bb01fae8360376df1",
  measurementId: "G-XTYHYR40S2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider }
export default db;
