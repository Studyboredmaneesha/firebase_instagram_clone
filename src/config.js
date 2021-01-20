import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDP_0XL7hVstK13uz3MFoMwgS8XWHtAILc",
  authDomain: "instagram-fb9c7.firebaseapp.com",
  databaseURL: "https://instagram-fb9c7.firebaseio.com",
  projectId: "instagram-fb9c7",
  storageBucket: "instagram-fb9c7.appspot.com",
  messagingSenderId: "349350461715",
  appId: "1:349350461715:web:347629794a6eb2533ddae6",
  measurementId: "G-D18HEP8ZT7"
};
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();
  
  export { db, auth, storage };
  
  