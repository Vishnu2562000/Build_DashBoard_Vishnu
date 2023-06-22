import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC6-ZdwEq7q-3tQwwPVAfdn0Kce4Ptl0e4",
  authDomain: "build-dashboard-5cfa4.firebaseapp.com",
  projectId: "build-dashboard-5cfa4",
  storageBucket: "build-dashboard-5cfa4.appspot.com",
  messagingSenderId: "1071553054771",
  appId: "1:1071553054771:web:0c00b72e99f196d65f7b46",
  measurementId: "G-MFDMFMPRPF",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
