// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore';
// import {getAuth} from 'firebase/auth'
// import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyApdRe732PvHHDB-WSa5BVPJ9vpchvS5vk",
  authDomain: "netflixgpt-a59fb.firebaseapp.com",
  projectId: "netflixgpt-a59fb",
  storageBucket: "netflixgpt-a59fb.appspot.com",
  messagingSenderId: "454289748758",
  appId: "1:454289748758:web:b6fb529b1842d6b627d637",
  measurementId: "G-4HRSNHXSE7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
// export const database= getAuth(app)
