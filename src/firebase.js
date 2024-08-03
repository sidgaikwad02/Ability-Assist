// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrbAj2LES5uleSWYQcft378lYBIN-tptU",
  authDomain: "ability-assist.firebaseapp.com",
  projectId: "ability-assist",
  storageBucket: "ability-assist.appspot.com",
  messagingSenderId: "861727464499",
  appId: "1:861727464499:web:465cf2be6d346f1f441746"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export default app;

