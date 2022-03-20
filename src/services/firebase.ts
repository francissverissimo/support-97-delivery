import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain:  import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID
};

firebase.initializeApp(firebaseConfig);

const database = firebase.firestore();

export { firebase, database };
