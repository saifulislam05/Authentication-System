import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyD0bhUCigWGEMVrjr5YtAHvSIiw7c1eP0A",
  authDomain: "geekster-auth.firebaseapp.com",
  projectId: "geekster-auth",
  storageBucket: "geekster-auth.appspot.com",
  messagingSenderId: "130633062856",
  appId: "1:130633062856:web:14eb8cbd845c527c3048fd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;
