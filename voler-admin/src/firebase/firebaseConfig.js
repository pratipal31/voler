// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAnFnIdsPGxhdKW1LnMOtfJGthyonBCNZ4",
    authDomain: "volunteerauth-3fb81.firebaseapp.com",
    projectId: "volunteerauth-3fb81",
    storageBucket: "volunteerauth-3fb81.appspot.com",
    messagingSenderId: "161312071916",
    appId: "1:161312071916:web:2cef47f0f0d72a3e4b05c9"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };