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

// const  firebaseTestConfig : FirebaseOptions = {
//   apiKey: "AIzaSyDZtfJBO9N7bnRPI8WnfMDfnKmRaGa1Oo4",
//   authDomain: "journal-test-app-a34bc.firebaseapp.com",
//   projectId: "journal-test-app-a34bc",
//   storageBucket: "journal-test-app-a34bc.appspot.com",
//   messagingSenderId: "943074388335",
//   appId: "1:943074388335:web:fceef1d498f157b1a2209a"
// }

export const firebaseApp = initializeApp(firebaseConfig)

export const firebaseAuth = getAuth(firebaseApp)

export const firebaseDB = getFirestore(firebaseApp)