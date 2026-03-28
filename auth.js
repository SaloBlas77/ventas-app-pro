import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCAre1FtPQ1mH5sch_l15_QCUrrE6feJTs",
    authDomain: "ventas-app-pro.firebaseapp.com",
    projectId: "ventas-app-pro",
    storageBucket: "ventas-app-pro.firebasestorage.app",
    messagingSenderId: "142986289176",
    appId: "1:142986289176:web:4906fdca2901a5b6aae36d"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// REGISTRO
window.registrar = async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    await createUserWithEmailAndPassword(auth, email, password);
    alert("Usuario registrado correctamente");
    window.location.href = "login.html";
  } catch (error) {
    alert("Error: " + error.message);
  }
};

// LOGIN
window.login = async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    await signInWithEmailAndPassword(auth, email, password);
    alert("Login exitoso");
    window.location.href = "ventas.html"; // redirige al CRUD
  } catch (error) {
    alert("Error: " + error.message);
  }
};