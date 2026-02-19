// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMMB0OLsPfu0HeGS80lIQkAifDPA2SwtM",
  authDomain: "wadsweek2-nextjs-81192.firebaseapp.com",
  projectId: "wadsweek2-nextjs-81192",
  storageBucket: "wadsweek2-nextjs-81192.firebasestorage.app",
  messagingSenderId: "689209929411",
  appId: "1:689209929411:web:9f466e343ecea3d885bc76",
  measurementId: "G-1Y12LXLB4T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
