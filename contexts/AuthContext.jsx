// contexts/AuthContext.jsx
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  updateEmail as updateUserEmail,
  updatePassword as updateUserPassword,
} from 'firebase/auth';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../config/firebase';

const AuthContext = createContext();

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Set up auth state listener
 useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, async (user) => {
    if (user) {
      // User is signed in, update the auth state
      setCurrentUser(user);
    } else {
      // User is signed out
      setCurrentUser(null);
    }
    setLoading(false);
  });

  return unsubscribe;
}, []);

  // Clear error
  const clearError = () => setError(null);

  // Login with email and password
  const login = async (email, password) => {
    try {
      clearError();
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  // Register new user with email and password
  const register = async (email, password, displayName) => {
    try {
      clearError();
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      if (user) {
        await updateProfile(user, { displayName });
        setCurrentUser({
          ...user,
          displayName
        });
      }
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  // Logout current user
  const logout = async () => {
    try {
      clearError();
      await signOut(auth);
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  // Reset password
  const resetPassword = async (email) => {
    try {
      clearError();
      await sendPasswordResetEmail(auth, email);
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  // Update email
  const updateEmail = async (email) => {
    if (!auth.currentUser) throw new Error('No user is currently signed in');
    try {
      clearError();
      await updateUserEmail(auth.currentUser, email);
      setCurrentUser({
        ...auth.currentUser,
        email
      });
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  // Update password
  const updatePassword = async (password) => {
    if (!auth.currentUser) throw new Error('No user is currently signed in');
    try {
      clearError();
      await updateUserPassword(auth.currentUser, password);
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  // Update display name
  const updateDisplayName = async (displayName) => {
    if (!auth.currentUser) throw new Error('No user is currently signed in');
    try {
      clearError();
      await updateProfile(auth.currentUser, { displayName });
      setCurrentUser({
        ...auth.currentUser,
        displayName
      });
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const value = {
    currentUser,
    loading,
    login,
    register,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
    updateDisplayName,
    error,
    clearError,
    setCurrentUser, // Add this line to fix the error in _layout.jsx
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export default AuthContext;