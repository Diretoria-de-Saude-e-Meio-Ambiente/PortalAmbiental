// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import {
  getAuth,
  signInAnonymously,
} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-analytics.js";
import {
  getDatabase,
  ref,
  set,
  get,
  child,
} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-database.js";
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
const auth = getAuth(app);

// Initialize Realtime Database
const db = getDatabase(app);

signInAnonymously(auth)
  .then(() => {
    console.log("✅ Authenticated anonymously");

    // After login, write to the database
    const dataRef = ref(database, "users/user1");
    set(dataRef, {
      name: "John Doe",
      email: "john.doe@example.com",
    })
      .then(() => {
        console.log("✅ Data written successfully");
      })
      .catch((error) => {
        console.error("❌ Error writing data:", error);
      });
  })
  .catch((error) => {
    console.error("❌ Authentication failed:", error);
  });
