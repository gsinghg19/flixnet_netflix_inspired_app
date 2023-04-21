import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD-ddZCt-QzzoKlL9Rp67ktXkg8ESWRP8k",
  authDomain: "netflix-clone-d1b0c.firebaseapp.com",
  projectId: "netflix-clone-d1b0c",
  storageBucket: "netflix-clone-d1b0c.appspot.com",
  messagingSenderId: "899125445916",
  appId: "1:899125445916:web:4407ac8f90d90920f5a6d9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export { auth };
export { app };
export default db;
