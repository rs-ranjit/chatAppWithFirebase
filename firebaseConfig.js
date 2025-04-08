import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCF-hnqgrs1KZtShGr4NN3vK7FX7RJJ-yI",
  authDomain: "chatappfirebase-7458c.firebaseapp.com",
  projectId: "chatappfirebase-7458c",
  storageBucket: "chatappfirebase-7458c.firebasestorage.app",
  messagingSenderId: "3629449980",
  appId: "1:3629449980:web:07f35d4dee7f9dd81d0d79",
};

export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export const db = getFirestore(app);

export const userRef = collection(db, "users");
export const roomRef = collection(db, "rooms");
