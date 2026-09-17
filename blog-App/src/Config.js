import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Yeh credentials aapko aapke Firebase Console project settings se milenge
const firebaseConfig = {
    apiKey : "AIzaSyDXU5J06O51xpRAmUmeh6KzRdXcidpnrZk",
  authDomain: "blog-project-4eeb4.firebaseapp.com",
  projectId: "blog-project-4eeb4",
  storageBucket: "blog-project-4eeb4.firebasestorage.app",
  messagingSenderId: "286496254773",
  appId: "1:286496254773:web:bf339c85f51f655052ba7c"
};

// Firebase ko initialize karein
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);