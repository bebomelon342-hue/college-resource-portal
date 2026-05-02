import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCc-KWccHbUDOpA4j3lFdWyzq4eSP7VWzI",
  authDomain: "college-resource-portal.firebaseapp.com",
  projectId: "college-resource-portal",
  storageBucket: "college-resource-portal.firebasestorage.app",
  messagingSenderId: "545349299909",
  appId: "1:545349299909:web:6e361acffd265c72ae0aac",
  measurementId: "G-MCF9E2D59W"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);