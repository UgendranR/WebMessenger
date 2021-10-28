import firebase from "firebase"
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_QXkcm2fkRJyoSB32UB6oPsZYSTBLMRc",
  authDomain: "webchat-25764.firebaseapp.com",
  databaseURL: "https://webchat-25764-default-rtdb.firebaseio.com",
  projectId: "webchat-25764",
  storageBucket: "webchat-25764.appspot.com",
  messagingSenderId: "265589335677",
  appId: "1:265589335677:web:78358b0f9317aa7dd57314",
  measurementId: "G-L6CN4KHLF7"
};

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();
const provider=new firebase.auth.GoogleAuthProvider();

export{auth,provider};
export default db;