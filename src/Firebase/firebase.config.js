// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlMh4YZxuf9GQyEbriJdjKARK9Ypnb_cg",
  authDomain: "kfc-kushtia-bd.firebaseapp.com",
  projectId: "kfc-kushtia-bd",
  storageBucket: "kfc-kushtia-bd.appspot.com",
  messagingSenderId: "844723514577",
  appId: "1:844723514577:web:7f5adf125fcab8873fa9f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;