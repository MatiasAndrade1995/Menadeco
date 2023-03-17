import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAA4VLYdV_Diq8TD6nezfneT0albfUaM3o",
    authDomain: "menadeco-b14c2.firebaseapp.com",
    projectId: "menadeco-b14c2",
    storageBucket: "menadeco-b14c2.appspot.com",
    messagingSenderId: "463051584345",
    appId: "1:463051584345:web:276efe8df6b992e88c9248"
};

// Initialize Firebase
initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

