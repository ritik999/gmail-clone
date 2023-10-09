import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth, GoogleAuthProvider  } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCkslLWfX7Cfd3kTkGch_KgSCwc0Sy8MP4",
  authDomain: "clone-e8581.firebaseapp.com",
  projectId: "clone-e8581",
  storageBucket: "clone-e8581.appspot.com",
  messagingSenderId: "1053066310018",
  appId: "1:1053066310018:web:732575736fc950f105df9b"
};

const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
export const auth=getAuth(app);
export const provider = new GoogleAuthProvider();