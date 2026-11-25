// firebase.js - UltraTopUp
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6pPRpSQj2L0OIOB5icVDrXmH-qoNDNtY",
  authDomain: "ultratopup-7a7ef.firebaseapp.com",
  projectId: "ultratopup-7a7ef",
  storageBucket: "ultratopup-7a7ef.firebasestorage.app",
  messagingSenderId: "127771983027",
  appId: "1:127771983027:web:a8274a6e3e227b184304c6",
  measurementId: "G-P1S7M8337Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Database ar Login er jonno ei 2ta export korlam
export const db = getFirestore(app);
export const auth = getAuth(app);
export default app;
