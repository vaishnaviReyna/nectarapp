// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBfdeTO-JJQaqm5J2dr3bOjD3vcjLKX3c",
  authDomain: "nectarfirebase.firebaseapp.com",
  databaseURL: "https://nectarfirebase-default-rtdb.firebaseio.com",
  projectId: "nectarfirebase",
  storageBucket: "nectarfirebase.appspot.com",
  messagingSenderId: "557248128435",
  appId: "1:557248128435:web:d2c48f9c893586a82197c6",
  measurementId: "G-LF0GVWYWXX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);