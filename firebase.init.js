// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "darkfam-camping-gear.firebaseapp.com",
  projectId: "darkfam-camping-gear",
  storageBucket: "darkfam-camping-gear.appspot.com",
  messagingSenderId: process.env.MASSAGE_SEND_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MESURMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)

export default auth;