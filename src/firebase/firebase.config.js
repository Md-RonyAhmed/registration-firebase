// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0bwmAdp6bROvRFV-JxBIdoG9aDO_E-vw",
  authDomain: "simple-register-app.firebaseapp.com",
  projectId: "simple-register-app",
  storageBucket: "simple-register-app.appspot.com",
  messagingSenderId: "712796503037",
  appId: "1:712796503037:web:c0a9dcee6e637306777794"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;