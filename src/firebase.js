import {initializeApp} from 'firebase/app';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { doc, query, orderBy, onSnapshot, collection, setDoc } from "firebase/firestore";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBF_Lfzozm5W2mJS7LGisaI2HCEzZFSQYI",
    authDomain: "clone-2798a.firebaseapp.com",
    projectId: "clone-2798a",
    storageBucket: "clone-2798a.appspot.com",
    messagingSenderId: "319429616973",
    appId: "1:319429616973:web:a54e89e38373bc1dd78304",
    measurementId: "G-96FPWRRQMN"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, doc, auth, query, orderBy, onSnapshot, collection, setDoc};

