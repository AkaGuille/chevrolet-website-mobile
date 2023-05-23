// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgXbTVl3m6gb315yV5wktxxjwgFy1jC5g",
  authDomain: "chevrolet-database.firebaseapp.com",
  projectId: "chevrolet-database",
  storageBucket: "chevrolet-database.appspot.com",
  messagingSenderId: "426490634395",
  appId: "1:426490634395:web:9607700a87ca73d1d3663e",
  measurementId: "G-T59RWQ8HYW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);