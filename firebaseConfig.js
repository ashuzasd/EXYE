
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAD10f2GWe0_1XUSz8Zg8GtF6GLSqJxIzA",
  authDomain: "aura-quiz-10caf.firebaseapp.com",
  projectId: "aura-quiz-10caf",
  storageBucket: "aura-quiz-10caf.appspot.com",
  messagingSenderId: "798609166176",
  appId: "1:798609166176:web:c6be759050bac993f0d805"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);



// andiroid : - 911143679671-p7okgt2846la5570hr9nnvsitmt19n4l.apps.googleusercontent.com