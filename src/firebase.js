// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyDtLLycK-rbMPr8PWxYHrXaMksJ7smEM4M",
  authDomain: "react-portfolio-b4ea6.firebaseapp.com",
  projectId: "react-portfolio-b4ea6",
  storageBucket: "react-portfolio-b4ea6.appspot.com",
  messagingSenderId: "203118351053",
  appId: "1:203118351053:web:d30e7b14a6aa268e990f84"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();