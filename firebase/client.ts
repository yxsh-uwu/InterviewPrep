import { initializeApp, getApp, getApps } from 'firebase/app'
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyABOjsrtgiqhs1-mafJ0Nsy1dhgJcgO42o",
  authDomain: "prepwise-56f1e.firebaseapp.com",
  projectId: "prepwise-56f1e",
  storageBucket: "prepwise-56f1e.firebasestorage.app",
  messagingSenderId: "894116581220",
  appId: "1:894116581220:web:a76209269c27266365f471",
  measurementId: "G-RR7KYMXKCF"
};


// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);