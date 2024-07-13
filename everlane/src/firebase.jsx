// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCavVMnYO3b2p-GS6JJFS-CwktYD6joWeA",
  authDomain: "authentication-bd918.firebaseapp.com",
  projectId: "authentication-bd918",
  storageBucket: "authentication-bd918.appspot.com",
  messagingSenderId: "211690571915",
  appId: "1:211690571915:web:ad08948e4e2aa16eee2c8e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)


export {auth}
