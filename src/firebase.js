import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword,GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCpYNCABYVY3zalOlABvFHm0-TWHiuBwzY",
    authDomain: "disney-clone-70cf0.firebaseapp.com",
    projectId: "disney-clone-70cf0",
    storageBucket: "disney-clone-70cf0.appspot.com",
    messagingSenderId: "120989695856",
    appId: "1:120989695856:web:88a9a202195e660f9019b5",
    measurementId: "G-NREJQ188LR"
};
const Fireapp = initializeApp(firebaseConfig);
const db = getFirestore(Fireapp);
const auth = getAuth(Fireapp);
const provider = new GoogleAuthProvider();
const storage = getStorage(Fireapp)
export { auth, provider, storage };
export default db;