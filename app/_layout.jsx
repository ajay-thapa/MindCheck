// app/_layout.jsx
import { Stack, useRootNavigationState, useRouter, useSegments } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { auth } from '../config/firebase';
import { useAuth } from '../contexts/AuthContext';

function RootLayoutNav() {
  const { currentUser, setCurrentUser } = useAuth();
  const segments = useSegments();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const navigationState = useRootNavigationState();

  // Set up auth state listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setIsLoading(false);
      
      // Handle initial navigation based on auth state
      if (!navigationState?.key) return;
      
      const inAuthGroup = segments[0] === '(auth)';
      const inQuizGroup = segments[0] === 'Quiz';
      
      if (!user && !inAuthGroup) {
        router.replace('/(auth)/login');
      } else if (user && inAuthGroup && !inQuizGroup) {
        router.replace('/(main)/(tabs)/home');
      }
    });

    return unsubscribe;
  }, []);

  // Handle navigation when segments change
  useEffect(() => {
    if (isLoading || !navigationState?.key) return;

    const inAuthGroup = segments[0] === '(auth)';
    const inQuizGroup = segments[0] === 'Quiz';
    
    if (!currentUser && !inAuthGroup) {
      router.replace('/(auth)/login');
    } else if (currentUser && inAuthGroup && !inQuizGroup) {
      router.replace('/(main)/(tabs)/home');
    }
  }, [currentUser, isLoading, segments, navigationState]);

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#6366f1" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: '#0f172a' },
          animation: 'fade',
        }}
      >
        <Stack.Screen name="(auth)" />
        <Stack.Screen 
          name="(main)" 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Quiz/level-selection" 
          options={{ 
            title: 'Select Level',
            headerShown: true,
            headerStyle: { 
              backgroundColor: '#0f172a',
              borderBottomColor: '#1e293b',
            },
            headerTintColor: '#f8fafc',
            headerTitleStyle: {
              fontWeight: '600',
            },
          }} 
        />
        <Stack.Screen 
          name="Quiz/start" 
          options={{ 
            title: 'Quiz',
            headerShown: true,
            headerBackTitle: 'Back',
            headerStyle: { 
              backgroundColor: '#0f172a',
              borderBottomColor: '#1e293b',
            },
            headerTintColor: '#f8fafc',
            headerTitleStyle: {
              fontWeight: '600',
            },
          }} 
        />
      </Stack>
    </View>
  );
}

export default function RootLayout() {
  const { AuthProvider } = require('../contexts/AuthContext');
  return (
    <AuthProvider>
      <RootLayoutNav />
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0f172a',
  },
});