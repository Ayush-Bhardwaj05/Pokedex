// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDGbSuAX4wx8x8YgYKRryUQTbzGXWvFy-s",
  authDomain: "pokedex-05.firebaseapp.com",
  projectId: "pokedex-05",
  storageBucket: "pokedex-05.appspot.com",
  messagingSenderId: "372697737985",
  appId: "1:372697737985:web:16cbc718f3e37ead7d8900",
  measurementId: "G-71E1CY9H6D",
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, "users");
export const pokemonListRef = collection(firebaseDB, "pokemonList");
