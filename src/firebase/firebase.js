// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1Ofgkz487C82bjD2A3ebkn6YAyQ4TPHc",
  authDomain: "coderhousereact-ab724.firebaseapp.com",
  projectId: "coderhousereact-ab724",
  storageBucket: "coderhousereact-ab724.appspot.com",
  messagingSenderId: "1068463803704",
  appId: "1:1068463803704:web:09103c1f95df7c929585cd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);