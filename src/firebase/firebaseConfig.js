import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore}  from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAlJ5fqqSCOe4LoUXVD40QSJuLNoro27WY",
  authDomain: "movie-app-auth-e8f44.firebaseapp.com",
  projectId: "movie-app-auth-e8f44",
  storageBucket: "movie-app-auth-e8f44.appspot.com",
  messagingSenderId: "345828159392",
  appId: "1:345828159392:web:259985a3b5c6a440fffec5"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)

export default app
