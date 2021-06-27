import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBuYSGzCsjNlE5Li6UfUqa8TB6dndk4t-I",
  authDomain: "netflix-full-build-29831.firebaseapp.com",
  projectId: "netflix-full-build-29831",
  storageBucket: "netflix-full-build-29831.appspot.com",
  messagingSenderId: "1079785298368",
  appId: "1:1079785298368:web:6ee3d028144db7945a5025"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;