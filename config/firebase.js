import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBZ5dl326nTSQmOZcyHKgTlO27pQ02gz8I",
  authDomain: "first-19998.firebaseapp.com",
  databaseURL: "https://first-19998-default-rtdb.firebaseio.com",
  projectId: "first-19998",
  storageBucket: "first-19998.appspot.com",
  messagingSenderId: "777109414018",
  appId: "1:777109414018:web:03f228f6e280b893fd149b",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
