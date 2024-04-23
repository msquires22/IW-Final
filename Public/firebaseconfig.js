// firebaseconfig.js
// Import the functions you need from the Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMk4dgMr-CtAkbX7zL3zqMkoJIZKfRBcI",
  authDomain: "cac-web-app-a3850.firebaseapp.com",
  projectId: "cac-web-app-a3850",
  storageBucket: "cac-web-app-a3850.appspot.com",
  messagingSenderId: "592050585759",
  appId: "1:592050585759:web:58de5559274ba74abc22aa",
  measurementId: "G-Q4LKLBVC17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };