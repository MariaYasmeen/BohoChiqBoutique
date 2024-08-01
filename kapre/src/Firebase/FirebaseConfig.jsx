// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyBDfzexS_8AhkSsh0uRf2wpr_nvLr0bxIg",
  authDomain: "myaasmeeen.firebaseapp.com",
  projectId: "myaasmeeen",
  storageBucket: "myaasmeeen.appspot.com",
  messagingSenderId: "773058505851",
  appId: "1:773058505851:web:7c6908e940b09c218dc6de",
  measurementId: "G-WXLKNRR9ZH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);