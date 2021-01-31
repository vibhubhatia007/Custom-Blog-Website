
import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyAWh_ln-j2CggoYLQcAwccu273BCjS3uv0",
        authDomain: "portfolio-website-ac266.firebaseapp.com",
        projectId: "portfolio-website-ac266",
        storageBucket: "portfolio-website-ac266.appspot.com",
        messagingSenderId: "514705771429",
        appId: "1:514705771429:web:443bc01b303560a45b764c"

});

var db = firebaseApp.firestore();

export { db };