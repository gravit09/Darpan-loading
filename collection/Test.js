const bcrypt = require("bcrypt");
const {
  collection,
  addDoc, 
  query,
  where,
  getDocs,
  setDoc,
} = require("firebase/firestore/lite");
const db = require("../firebase/config");

const Test = collection(db, "Test");

const addTest = async (testdata) => {
    try {
      const docRef = await addDoc(Test, {
        ...testdata
      });
      return { result: true };
    } catch (error) {
      throw error;
    }
  };

module.exports = {Test, addTest};