 // Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app';
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQWAk800omBMr4F-A5mc4-ZF-_53iUbJY",
  authDomain: "ngam-549ef.firebaseapp.com",
  projectId: "ngam-549ef",
  storageBucket: "ngam-549ef.firebasestorage.app",
  messagingSenderId: "950891057667",
  appId: "1:950891057667:web:37408426ca41bc4c1b3436",
  measurementId: "G-SLFRNLFGS1"
};

// Initialize Firebase
const app = !getApps.length ?  initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app)