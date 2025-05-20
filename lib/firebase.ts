import { initializeApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAb0ck4vQaqv4tDyMQLtId25cGeGMgAygg",
  authDomain: "srinformatics-bd6be.firebaseapp.com",
  projectId: "srinformatics-bd6be",
  storageBucket: "srinformatics-bd6be.firebasestorage.app",
  messagingSenderId: "205785756304",
  appId: "1:205785756304:web:1b5bfc04c09f8599de5e15",
  measurementId: "G-7CS20PZJSE"
};

// Initialize Firebase
let app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
let analytics = null;
let db = null;

if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
  db = getFirestore(app);
}

export { app, analytics, db }; 