// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIMlIaIsC_xwBIAfF6056vaEqmppTSwpM",
  authDomain: "house-marketplace-app-fe0e5.firebaseapp.com",
  projectId: "house-marketplace-app-fe0e5",
  storageBucket: "house-marketplace-app-fe0e5.appspot.com",
  messagingSenderId: "108808972994",
  appId: "1:108808972994:web:cf3d11396377d311cb695b",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
