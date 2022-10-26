import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBGDcib-RZfnvy-sZ6jvTL8iwHtk1YX99k",
    authDomain: "learning-platfrom-c674c.firebaseapp.com",
    projectId: "learning-platfrom-c674c",
    storageBucket: "learning-platfrom-c674c.appspot.com",
    messagingSenderId: "76558099072",
    appId: "1:76558099072:web:b634af4e8cbc895e49bc65"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;