import  firebase from "firebase/app";
import "firebase/auth"

var firebaseConfig = {
    apiKey: "AIzaSyA0w5SRbbI5aiL7kW29OMuqSq5Nm4w-pGU",
    authDomain: "cflow-85d09.firebaseapp.com",
    projectId: "cflow-85d09",
    storageBucket: "cflow-85d09.appspot.com",
    messagingSenderId: "165635199282",
    appId: "1:165635199282:web:7b797a9a4efdac74c2472b"
  };
  firebase.initializeApp(firebaseConfig);

export default firebase;