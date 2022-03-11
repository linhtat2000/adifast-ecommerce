// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAl93GveI-LOm0qiWrFGvvMrARbVpTCXB8",
  authDomain: "adifast-ecommerce.firebaseapp.com",
  projectId: "adifast-ecommerce",
  storageBucket: "adifast-ecommerce.appspot.com",
  messagingSenderId: "1056947972318",
  appId: "1:1056947972318:web:c10c9d10a9720b234e7a4f",
  measurementId: "G-2M589CVHV3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
