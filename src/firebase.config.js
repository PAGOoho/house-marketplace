// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAmp7dKOjoALZ6WcWDUjIq9oB23I0vYOTE',
  authDomain: 'house-marketplace-app-aed51.firebaseapp.com',
  projectId: 'house-marketplace-app-aed51',
  storageBucket: 'house-marketplace-app-aed51.appspot.com',
  messagingSenderId: '606851954515',
  appId: '1:606851954515:web:0dfbaee7acf1684f1393a6',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
