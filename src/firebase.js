import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBA1ItMYRLm1zKdpHSfz4G5iV6Pt2aMH-E",
  authDomain: "clone-fc004.firebaseapp.com",
  projectId: "clone-fc004",
  storageBucket: "clone-fc004.appspot.com",
  messagingSenderId: "525288206168",
  appId: "1:525288206168:web:cda8d859e20c64028dff2d",
  measurementId: "G-PQ5KHX1RLS",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebaseApp.auth();

export { auth };
