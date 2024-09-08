// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getFirestore, collection } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUdGjzX7BTOJidCYAXOAZ5JBMZkNSfOzQ",
  authDomain: "expensecalculator-3afd5.firebaseapp.com",
  projectId: "expensecalculator-3afd5",
  storageBucket: "expensecalculator-3afd5.appspot.com",
  messagingSenderId: "626814067761",
  appId: "1:626814067761:web:269ed1cb13f0758629a110",
  measurementId: "G-RDGE26MX2V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const tripsRef = collection(db, "trips");
export const expensesRef = collection(db, "expenses");
