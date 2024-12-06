// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpNF80_Vuxudv7ht208p-HzmsLOPx27Rw",
  authDomain: "ecovent-76808.firebaseapp.com",
  projectId: "ecovent-76808",
  storageBucket: "ecovent-76808.firebasestorage.app",
  messagingSenderId: "365523173561",
  appId: "1:365523173561:web:e6a35becf40cf49ed31b68",
  measurementId: "G-QGCG5S9VNF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);