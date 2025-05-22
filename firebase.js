// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWiWrvQ4mmQij6O0Oo2U07E81xZ1agi0U",
  authDomain: "smart-irrigation-system-45f9a.firebaseapp.com",
  databaseURL: "https://smart-irrigation-system-45f9a-default-rtdb.firebaseio.com",
  projectId: "smart-irrigation-system-45f9a",
  storageBucket: "smart-irrigation-system-45f9a.appspot.com",
  messagingSenderId: "246671868168",
  appId: "1:246671868168:web:760f70fed19212b8fdacbd",
  measurementId: "G-KCMEQFCSQN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
import firebaseApp from './firebase';