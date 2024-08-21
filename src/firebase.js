// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Import the getAuth function

const firebaseConfig = {
  apiKey: "AIzaSyCzXSQn0LbbPCwoeMERNhEH4i-IlqzAP7E",
  authDomain: "vanlife-da33c.firebaseapp.com",
  projectId: "vanlife-da33c",
  storageBucket: "vanlife-da33c.appspot.com",
  messagingSenderId: "757696452772",
  appId: "1:757696452772:web:318e92da86be00b48dae31"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(app); // Create an instance of Firebase Authentication

export { app, auth }; // Export both the app and auth instances
