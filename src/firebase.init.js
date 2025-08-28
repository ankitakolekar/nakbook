
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDY3Rxm8w5NITNT6KFoRIG2AqzDduE1qjs",
  authDomain: "nakbook-f2df7.firebaseapp.com",
  projectId: "nakbook-f2df7",
  storageBucket: "nakbook-f2df7.firebasestorage.app",
  messagingSenderId: "184129717249",
  appId: "1:184129717249:web:f9a72aae169075853dec00",
  measurementId: "G-6S9X3V89Y9"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;



