import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyANjxnlbqEWv8f086M5LRvRzmDpDVWG6s0",
  authDomain: "suporte-zap-delivery.firebaseapp.com",
  projectId: "suporte-zap-delivery"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.firestore();

export { firebase, database };
