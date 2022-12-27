import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyApYe2qbHpn-jiepyfjbI7Hh4RpznxmuLc",
    authDomain: "december-7623b.firebaseapp.com",
    projectId: "december-7623b",
    storageBucket: "december-7623b.appspot.com",
    messagingSenderId: "560382244355",
    appId: "1:560382244355:web:e5607352b391d54715c036",
    measurementId: "G-229934K008"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth();

