import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAkVDYxGlahxKOajvVyI_oHTRKjd0kaPws",
    authDomain: "user-tracker-cba55.firebaseapp.com",
    projectId: "user-tracker-cba55",
    storageBucket: "user-tracker-cba55.appspot.com",
    messagingSenderId: "555368984738",
    appId: "1:555368984738:web:7b1bae5448b3e6ff8027fb",
    measurementId: "G-QFWFZMV9NB"
  };

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);