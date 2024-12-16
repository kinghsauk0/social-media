// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFqlDYDoE0r4UDgMe1-HAPSxYYdRwlt7k",
  authDomain: "media-app-8ae2e.firebaseapp.com",
  projectId: "media-app-8ae2e",
  storageBucket: "media-app-8ae2e.firebasestorage.app",
  messagingSenderId: "833379527277",
  appId: "1:833379527277:web:762a3f71bb0422e915ad64",
  measurementId: "G-6WR0VN129N"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);