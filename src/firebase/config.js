// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSQUgJCt0WrUVW__OiQ4I-rvWqZ1Zdf-E",
  authDomain: "reactjs-37075-57b9f.firebaseapp.com",
  projectId: "reactjs-37075-57b9f",
  storageBucket: "reactjs-37075-57b9f.appspot.com",
  messagingSenderId: "252868722505",
  appId: "1:252868722505:web:a9df05736fa6f6e8f76498"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);