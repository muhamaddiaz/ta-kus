import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAuOm_760lDRjsKakckIodf4-fNfR-fB6w",
  authDomain: "test-b4a94.firebaseapp.com",
  databaseURL: "https://test-b4a94.firebaseio.com",
  projectId: "test-b4a94",
  storageBucket: "test-b4a94.appspot.com",
  messagingSenderId: "611704518703",
  appId: "1:611704518703:web:eb4bb3e9ec40e6f6cdeeda",
  measurementId: "G-3XTN1QDJG3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const databaseRef = firebase.database();

export const databaseInstance = databaseRef.ref("User/Sistol").limitToLast(10);
export const databaseInstanceDiastol = databaseRef
  .ref("User/Diastol")
  .limitToLast(10);
export const databaseInstanceTime = databaseRef.ref("sessions").limitToLast(10);
