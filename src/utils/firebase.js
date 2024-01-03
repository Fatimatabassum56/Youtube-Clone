// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-AZwfdGIKAiAn7fe0IsCVuoZoObEJQ54",
  authDomain: "clone-70b45.firebaseapp.com",
  projectId: "clone-70b45",
  storageBucket: "clone-70b45.appspot.com",
  messagingSenderId: "999886418981",
  appId: "1:999886418981:web:e4fd69c72f453ddf523bcc",
  measurementId: "G-KDG6WMP8G4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();