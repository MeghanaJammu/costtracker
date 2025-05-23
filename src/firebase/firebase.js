import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBnAspndZYzYb14qkv9Ra2okOLV7Tb2lEI',
  authDomain: 'costtracker-e1937.firebaseapp.com',
  projectId: 'costtracker-e1937',
  storageBucket: 'costtracker-e1937.firebasestorage.app',
  messagingSenderId: '264069593875',
  appId: '1:264069593875:web:76121a0a3f0ba7fc68f8e6',
  measurementId: 'G-VYT7D8LJ6L',
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
