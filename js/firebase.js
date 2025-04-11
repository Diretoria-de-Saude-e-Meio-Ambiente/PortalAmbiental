// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSzKV_Y-qI-ifP6mXumEIizDgTNP_YAnA",
  authDomain: "portalambientaldsma.firebaseapp.com",
  projectId: "portalambientaldsma",
  storageBucket: "portalambientaldsma.firebasestorage.app",
  messagingSenderId: "1011192271467",
  appId: "1:1011192271467:web:13fdbe38cbad6df485972e",
  measurementId: "G-ST75EBG5JJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
