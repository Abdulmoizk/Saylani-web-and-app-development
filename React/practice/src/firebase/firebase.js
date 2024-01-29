
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut  } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBQJEU5M0vhmwcQd_pLB4SRffm0fELEBdE",
  authDomain: "abdul-moiz-11cd1.firebaseapp.com",
  projectId: "abdul-moiz-11cd1",
  storageBucket: "abdul-moiz-11cd1.appspot.com",
  messagingSenderId: "47102300225",
  appId: "1:47102300225:web:9a71cce3952054c70776c0",
  measurementId: "G-16H1G3D1B8"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

export{
    app,
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    

}

