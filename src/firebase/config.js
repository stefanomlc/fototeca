// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
/* import { getAnalytics } from "firebase/analytics"; */
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFW_FARnoY3uhrpADnW8WCkfUEwoKBNls",
  authDomain: "fototeca-sinergiavm.firebaseapp.com",
  projectId: "fototeca-sinergiavm",
  storageBucket: "fototeca-sinergiavm.appspot.com",
  messagingSenderId: "1018762665028",
  appId: "1:1018762665028:web:3a8df92c5f3fea34283011",
  measurementId: "G-01KFL273P7"
};

// Initialize Firebase
/* const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);  */

initializeApp(firebaseConfig);