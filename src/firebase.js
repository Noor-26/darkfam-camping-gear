// Import the functions you need from the SDKs you need
import {getAuth} from "firebase/auth"
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdmraXJ4f63T3iEggI_0NJNXsfvPjCM1U", 
  authDomain: "darkfam-camping-gear.firebaseapp.com",
  projectId: "darkfam-camping-gear",
  storageBucket: "darkfam-camping-gear.appspot.com",
  messagingSenderId: "713519707051",
  appId: "1:713519707051:web:b37adb1934b0f52fb0d8ee",
  measurementId: "G-352RNSQ5WR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)

export default auth;