import firebase from "firebase/app";
import "firebase/database";

const config = {
    apiKey: "AIzaSyCvfSBgjtUIdeOwHmSBOn5HZYRhGqU6b4E",
    authDomain: "chat-37afb.firebaseapp.com",
    databaseURL: "https://chat-37afb-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "chat-37afb",
    storageBucket: "chat-37afb.appspot.com",
    messagingSenderId: "900992970394",
    appId: "1:900992970394:web:9e2a7b13a5fa8291c33923"
}

const db = firebase.initializeApp(config);
export default db;