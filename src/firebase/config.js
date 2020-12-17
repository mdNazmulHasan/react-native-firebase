import * as firebase from "firebase";
import "@firebase/auth";
import "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBTwihrwXcfIxuZA-JIFpwDQmRevLEMb_0",
  authDomain: "kinetic-dream-106907.firebaseapp.com",
  databaseURL: "https://kinetic-dream-106907.firebaseio.com",
  projectId: "kinetic-dream-106907",
  storageBucket: "kinetic-dream-106907.appspot.com",
  messagingSenderId: "925749541564",
  appId: "1:925749541564:ios:0e4513c5ec68fe5c866eb9",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
