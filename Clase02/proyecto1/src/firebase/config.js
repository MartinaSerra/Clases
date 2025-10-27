import app from "firebase/app";
import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyDhvvXE0tAMcmY06gbPcFvX3hag3q_oUTI",
    authDomain: "proyecto01-b945d.firebaseapp.com",
    projectId: "proyecto01-b945d",
    storageBucket: "proyecto01-b945d.firebasestorage.app",
    messagingSenderId: "4239205939",
    appId: "1:4239205939:web:453805dd91df3eafa5a546"
  };


app.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const storage = app.storage()
export const db = app.firestore()
