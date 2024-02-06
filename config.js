import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyABXAlzoYKIzoWG8Mvk7l95xeUy6rg11JU",
  authDomain: "proj-71-94cde.firebaseapp.com",
  projectId: "proj-71-94cde",
  storageBucket: "proj-71-94cde.appspot.com",
  messagingSenderId: "76505368018",
  appId: "1:76505368018:web:7ed3db62a9403370afb40b"
};


firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
