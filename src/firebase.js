import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBr1mXmphPkURQDEPmQkzDci1EsJYs_8Vo",
  authDomain: "travelgo2-3fe6e.firebaseapp.com",
  projectId: "travelgo2-3fe6e",
  storageBucket: "travelgo2-3fe6e.firebasestorage.app",
  messagingSenderId: "403349916126",
  appId: "1:403349916126:web:9568d2e458756c755ff54f",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;