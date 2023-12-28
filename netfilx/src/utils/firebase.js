// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);