// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATItIrPH8ICYvQTFcEyYTVYDLxVy6MNco",
  authDomain: "netflixgpt-e4d42.firebaseapp.com",
  projectId: "netflixgpt-e4d42",
  storageBucket: "netflixgpt-e4d42.firebasestorage.app",
  messagingSenderId: "832824468666",
  appId: "1:832824468666:web:e244212fefb34a9744ce83",
  measurementId: "G-PTS9SW30B0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();