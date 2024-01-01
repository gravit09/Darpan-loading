const { initializeApp } = require("firebase/app");
const { getFirestore } = require("firebase/firestore/lite");

const firebaseConfig = {
  apiKey: "AIzaSyCjOZ0NLJpwmRi-DIcZUHEMKLSDvRJN8kE",

  authDomain: "darpan-6466d.firebaseapp.com",

  projectId: "darpan-6466d",

  storageBucket: "darpan-6466d.appspot.com",

  messagingSenderId: "995993561831",

  appId: "1:995993561831:web:4066aea3bcbf2c30631042",

  measurementId: "G-CPXQV64FTT",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

module.exports = db;
