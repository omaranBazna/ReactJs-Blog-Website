import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB23kuoDm9nrUspl1OtnXr4djpVqnzJZao",
  authDomain: "blog-ddff5.firebaseapp.com",
  projectId: "blog-ddff5",
  storageBucket: "blog-ddff5.appspot.com",
  messagingSenderId: "472274377809",
  appId: "1:472274377809:web:77f151f1e4806f6ae02c70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();
