import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


import { firebaseConfig } from './firebase-secret';

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const gAuth = new GoogleAuthProvider();
export const gitAuth = new GithubAuthProvider();


export const db = getFirestore(app);