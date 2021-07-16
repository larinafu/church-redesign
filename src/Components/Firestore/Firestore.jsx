import firebase from "firebase";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

var firebaseConfig = {
  apiKey: "AIzaSyBgYEK5Tmfc7QlJUrdnrRJB-6kLai6xDM8",
  authDomain: "church-website-redesign.firebaseapp.com",
  projectId: "church-website-redesign",
  storageBucket: "church-website-redesign.appspot.com",
  messagingSenderId: "400906322767",
  appId: "1:400906322767:web:41a841f7d871e5926b3b3a",
  measurementId: "G-LF9J2R76D9",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true });

export default db;
