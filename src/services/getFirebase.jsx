import firebase from "firebase";
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyBPbgmmMimlYH6_vxTTL7HnBwNWhGFJOGw",
    authDomain: "amo-pintar.firebaseapp.com",
    projectId: "amo-pintar",
    storageBucket: "amo-pintar.appspot.com",
    messagingSenderId: "14311590774",
    appId: "1:14311590774:web:1d36e9e8bada790f070857"
  };

  const app = firebase.initializeApp(firebaseConfig)


  export function getFirestore () {
      return firebase.firestore(app)
  }