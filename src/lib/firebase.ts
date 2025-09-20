// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  projectId: "studio-3119966531-26348",
  appId: "1:448236288289:web:b7beea19333ee682902660",
  apiKey: "AIzaSyBhlYvxVVZ53zgdIwue5KTEaHpiia6uz8s",
  authDomain: "studio-3119966531-26348.firebaseapp.com",
  measurementId: "",
  messagingSenderId: "448236288289"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
