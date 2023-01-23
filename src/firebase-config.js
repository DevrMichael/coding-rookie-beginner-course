// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXpX_AxHQQhnzYS_I7FDlut5givhCZTsQ",
  authDomain: "cr-fe-kurs.firebaseapp.com",
  projectId: "cr-fe-kurs",
  storageBucket: "cr-fe-kurs.appspot.com",
  messagingSenderId: "569328292039",
  appId: "1:569328292039:web:a7071c6cda97cf8ad5aee2",
  measurementId: "G-VH4QNKQQXB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider(); 