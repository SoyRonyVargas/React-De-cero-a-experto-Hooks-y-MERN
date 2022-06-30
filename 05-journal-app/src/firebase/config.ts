import { FirebaseOptions, initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'
import { getAuth } from 'firebase/auth'

const firebaseConfig : FirebaseOptions = {
  apiKey: "AIzaSyBHPm9noCFqKcDPGymMzqm70YuP9rwmFUg",
  authDomain: "journal-app-cc5f4.firebaseapp.com",
  projectId: "journal-app-cc5f4",
  storageBucket: "journal-app-cc5f4.appspot.com",
  messagingSenderId: "153813306313",
  appId: "1:153813306313:web:9dd73dc3a5d4f41af8f618"
};

export const firebaseApp = initializeApp(firebaseConfig)

export const firebaseAuth = getAuth(firebaseApp)

export const firebaseDB = getFirestore(firebaseApp)