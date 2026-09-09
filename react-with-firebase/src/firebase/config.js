// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "react-practice-d1ba6.firebaseapp.com",
  projectId: "react-practice-d1ba6",
  storageBucket: "react-practice-d1ba6.firebasestorage.app",
  messagingSenderId: "85525436594",
  appId: "1:85525436594:web:693847b83f99167bf991ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


export default app