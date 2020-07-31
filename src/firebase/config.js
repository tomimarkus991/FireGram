import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: process.env.FIREBASE_APIKEY,
  authDomain: "firegram-77f22.firebaseapp.com",
  databaseURL: "https://firegram-77f22.firebaseio.com",
  projectId: "firegram-77f22",
  storageBucket: "firegram-77f22.appspot.com",
  messagingSenderId: "535044206181",
  appId: process.env.FIREBASE_APPID,
  measurementId: "G-Q13Z0DTWMH",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };
