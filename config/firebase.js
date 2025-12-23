import { initializeApp } from 'firebase/app';
import { initializeAuth, inMemoryPersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAnalytics, isSupported } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyAi45znToSkZxCT9M3JiaN9YkCqkSHkS3A",
  authDomain: "ajay-8717f.firebaseapp.com",
  projectId: "ajay-8717f",
  storageBucket: "ajay-8717f.firebasestorage.app",
  messagingSenderId: "827173535644",
  appId: "1:827173535644:web:c4f2c63b70ace6f5559259",
  measurementId: "G-9J4EJ5P65J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth with in-memory persistence
const auth = initializeAuth(app, {
  persistence: inMemoryPersistence
});

// Initialize other services
const db = getFirestore(app);
const storage = getStorage(app);
let analytics;

// Initialize Analytics (only in browser environment)
if (typeof window !== 'undefined') {
  isSupported().then(supported => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

export { auth, db, storage, analytics };
export default app;