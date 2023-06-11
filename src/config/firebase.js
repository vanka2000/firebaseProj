import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyAmoAhIgXIwK91LIxeKTCKpQ4MKrVsaVQA",
  authDomain: "zcam-f4d16.firebaseapp.com",
  projectId: "zcam-f4d16",
  storageBucket: "zcam-f4d16.appspot.com",
  messagingSenderId: "803629921435",
  appId: "1:803629921435:web:ad4535b55dc7c1f075c23e",
  measurementId: "G-C049MP7DL3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const analytics = getAnalytics(app);

