import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyBsOMjyYJAqDUlSzyUdTTmNyNsR8-xrMfw",
  authDomain: "andro-v1.firebaseapp.com",
  databaseURL: "https://andro-v1.firebaseio.com",
  projectId: "andro-v1",
  storageBucket: "andro-v1.appspot.com",
  messagingSenderId: "269051315543"
};

firebase.initializeApp(config);

export default firebase;
