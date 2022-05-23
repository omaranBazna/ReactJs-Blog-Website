import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDUyLKAhHyEvayKN_sa3XtcBs1p6BqoDA",
  authDomain: "blog-website-8c817.firebaseapp.com",
  projectId: "blog-website-8c817",
  storageBucket: "blog-website-8c817.appspot.com",
  messagingSenderId: "762669517576",
  appId: "1:762669517576:web:4aea03a05d0fd3ff647abd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();
