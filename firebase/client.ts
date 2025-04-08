import {initializeApp, getApp, getApps} from 'firebase/app'
import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const app = !getApps.length? initializeApp(firebaseConfig): getApp();

export const auth = getAuth(app);
export const db= getFirestore(app);