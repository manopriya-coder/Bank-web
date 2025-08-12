import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyhy4UYqfvkGzAkbUCa_DRRg3R9rQcX1g",
  authDomain: "bank-account-b9345.firebaseapp.com",
  projectId: "bank-account-b9345",
  storageBucket: "bank-account-b9345.firebasestorage.app",
  messagingSenderId: "197422269384",
  appId: "1:197422269384:web:fd694106694e35dee776fd",
  measurementId: "G-FMMHVJSQ47",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
