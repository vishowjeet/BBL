'use server';

import {initializeApp, getApps} from 'firebase/app';
import {getFirestore, collection, addDoc, query, where, getDocs} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

async function addUser(data: any) {
  try {
    // Check if the email already exists in the database
    const usersRef = collection(db, "users");
    const q = query(usersRef, where("email", "==", data.email));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      // If a document with the email exists, it means the email is already in use
      throw new Error('Email already in use');
    }

    // If the email doesn't exist, add the new user
    const docRef = await addDoc(collection(db, "users"), data);
    console.log("Document written with ID: ", docRef.id);
    return docRef.id;
  } catch (e: any) {
    console.error("Error adding document: ", e);
    throw e;
  }
}

export {addUser};
