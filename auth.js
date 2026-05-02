import { auth, db } from '../firebase/firebase-config.js';

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
  doc,
  setDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const registerForm = document.getElementById('registerForm');
const loginForm = document.getElementById('loginForm');

if (registerForm) {
  registerForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const semester = document.getElementById('semester').value;
    const password = document.getElementById('password').value;

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      await setDoc(doc(db, 'users', userCredential.user.uid), {
        name,
        email,
        semester,
        role: 'student'
      });

      alert('Registration Successful');
      window.location.href = 'dashboard.html';
    } catch (error) {
      alert(error.message);
    }
  });
}

if (loginForm) {
  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('Login Successful');
      window.location.href = 'dashboard.html';
    } catch (error) {
      alert(error.message);
    }
  });
}

window.logoutUser = async function() {
  await signOut(auth);
  alert('Logged Out');
  window.location.href = 'login.html';
};