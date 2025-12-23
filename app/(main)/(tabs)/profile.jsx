import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';
import { router } from 'expo-router';
import { signOut } from 'firebase/auth';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { auth, db } from '../../../config/firebase';

const LevelStats = ({ level, stats, color }) => {
  const levelStats = stats[level] || { totalScore: 0, totalQuestions: 0, attempts: 0 };
  const accuracy = levelStats.totalQuestions > 0 
    ? Math.round((levelStats.totalScore / levelStats.totalQuestions) * 100) 
    : 0;

  return (
    <View style={[styles.levelContainer, { borderLeftColor: color }]}>
      <View style={styles.levelHeader}>
        <Text style={[styles.levelTitle, { color }]}>
          {level.charAt(0).toUpperCase() + level.slice(1)}
        </Text>
      </View>
      <View style={styles.levelStatsRow}>
        <View style={styles.statItem}>
          <Text 
            style={styles.statItemValue} 
            numberOfLines={1} 
            adjustsFontSizeToFit 
            minimumFontScale={0.8}
          >
            {levelStats.attempts || 0}
          </Text>
          <Text 
            style={styles.statItemLabel} 
            numberOfLines={1} 
            adjustsFontSizeToFit 
            minimumFontScale={0.8}
          >
            Played
          </Text>
        </View>
        <View style={styles.statItem}>
          <Text 
            style={styles.statItemValue} 
            numberOfLines={1} 
            adjustsFontSizeToFit 
            minimumFontScale={0.8}
          >
            {levelStats.totalScore || 0}
          </Text>
          <Text 
            style={styles.statItemLabel} 
            numberOfLines={1} 
            adjustsFontSizeToFit 
            minimumFontScale={0.8}
          >
            Score
          </Text>
        </View>
      </View>
    </View>
  );
};

export default function Profile() {
  const [user, setUser] = useState(null);
  const [stats, setStats] = useState({
    easy: { totalScore: 0, totalQuestions: 0, attempts: 0, lastUpdated: null },
    medium: { totalScore: 0, totalQuestions: 0, attempts: 0, lastUpdated: null },
    hard: { totalScore: 0, totalQuestions: 0, attempts: 0, lastUpdated: null }
  });
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [localImageUri, setLocalImageUri] = useState(null);

  // Key for storing profile image in AsyncStorage
  const PROFILE_IMAGE_KEY = 'user_profile_image';

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        try {
          const userDoc = await getDoc(doc(db, 'users', user.uid));
          if (userDoc.exists()) {
            setStats(prev => ({
              ...prev,
              ...userDoc.data().stats
            }));
          }
          // Load saved image from AsyncStorage
          const savedImage = await AsyncStorage.getItem(`${PROFILE_IMAGE_KEY}_${user.uid}`);
          if (savedImage) {
            setLocalImageUri(savedImage);
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const pickImage = async () => {
    try {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission required', 'We need camera roll permissions to upload images');
        return;
      }

      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.8,
      });

      if (!result.canceled) {
        const selectedImage = result.assets[0];
        await saveImage(selectedImage.uri);
      }
    } catch (error) {
      console.error('Error picking image:', error);
      Alert.alert('Error', 'Failed to pick image. Please try again.');
    }
  };

  const saveImage = async (uri) => {
    if (!user) return;
    
    setUploading(true);
    try {
      // Save image URI to AsyncStorage
      await AsyncStorage.setItem(`${PROFILE_IMAGE_KEY}_${user.uid}`, uri);
      
      // Update local state
      setLocalImageUri(uri);
      
      // Update user document in Firestore (optional)
      try {
        await updateDoc(doc(db, 'users', user.uid), {
          photoURL: uri,
          updatedAt: new Date()
        });
      } catch (error) {
        console.log('Firebase update skipped (optional)');
      }
      
      Alert.alert('Success', 'Profile picture updated successfully!');
    } catch (error) {
      console.error('Error saving image:', error);
      Alert.alert('Error', 'Failed to save profile picture');
    } finally {
      setUploading(false);
    }
  };

  const handleLogout = async () => {
    try {
      // Clear the saved image from AsyncStorage on logout
      if (user) {
        await AsyncStorage.removeItem(`${PROFILE_IMAGE_KEY}_${user.uid}`);
      }
      await signOut(auth);
      router.replace('/(auth)/login');
    } catch (error) {
      console.error('Error signing out:', error);
      Alert.alert('Error', 'Failed to sign out');
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#6366f1" />
      </View>
    );
  }

  if (!user) {
    router.replace('/app/(auth)/login.jsx');
    return null;
  }

  const totalQuizzes = Object.values(stats).reduce((sum, level) => sum + (level.attempts || 0), 0);
  const totalScore = Object.values(stats).reduce((sum, level) => sum + (level.totalScore || 0), 0);
  const totalQuestions = Object.values(stats).reduce((sum, level) => sum + (level.totalQuestions || 0), 0);
  const accuracy = totalQuestions > 0 ? Math.round((totalScore / totalQuestions) * 100) : 0;

  return (
    <ScrollView 
      style={styles.container} 
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.scrollContent}
    >
      {/* User Info */}
      <View style={styles.profileSection}>
        <View style={styles.avatarContainer}>
          <TouchableOpacity onPress={pickImage} disabled={uploading}>
            {uploading ? (
              <View style={[styles.avatar, styles.uploadingOverlay]}>
                <ActivityIndicator size="large" color="#6366f1" />
              </View>
            ) : localImageUri ? (
              <Image 
                source={{ uri: localImageUri }} 
                style={styles.avatar} 
              />
            ) : user?.photoURL ? (
              <Image 
                source={{ uri: user.photoURL }} 
                style={styles.avatar} 
              />
            ) : (
              <View style={[styles.avatar, styles.avatarPlaceholder]}>
                <Ionicons name="person" size={40} color="#f8fafc" />
              </View>
            )}
            <View style={styles.editButton}>
              <Ionicons name="camera" size={16} color="#6366f1" />
            </View>
          </TouchableOpacity>
        </View>
        
        <Text style={styles.userName} numberOfLines={1} ellipsizeMode="tail">
          {user?.displayName || 'Anonymous User'}
        </Text>
        <Text 
          style={styles.userEmail} 
          numberOfLines={1} 
          ellipsizeMode="middle"
          minimumFontScale={0.8}
          adjustsFontSizeToFit
          minimumFontSize={12}
        >
          {user?.email || 'No email provided'}
        </Text>
      </View>

      {/* Overall Stats */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Overall Statistics</Text>
        <View style={styles.overallStats}>
          <View style={styles.overallStatItem}>
            <Text style={styles.overallStatValue}>{totalQuizzes}</Text>
            <Text style={styles.overallStatLabel}>Total Quizzes</Text>
          </View>
          <View style={styles.overallStatItem}>
            <Text style={styles.overallStatValue}>{totalScore}</Text>
            <Text style={styles.overallStatLabel}>Total Score</Text>
          </View>
          <View style={styles.overallStatItem}>
            <Text style={styles.overallStatValue}>
              {isNaN(accuracy) ? '0' : accuracy}%
            </Text>
            <Text style={styles.overallStatLabel}>Accuracy</Text>
          </View>
        </View>
      </View>

      {/* Level-wise Stats */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Level-wise Statistics</Text>
        <LevelStats 
          level="easy" 
          stats={stats} 
          color="#10b981" 
        />
        <LevelStats 
          level="medium" 
          stats={stats} 
          color="#f59e0b" 
        />
        <LevelStats 
          level="hard" 
          stats={stats} 
          color="#ef4444" 
        />
      </View>

      {/* Logout Button */}
      <TouchableOpacity 
        style={styles.logoutButton}
        onPress={handleLogout}
      >
        <Ionicons name="log-out-outline" size={20} color="#ef4444" />
        <Text style={styles.logoutText}>Sign Out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 40,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0f172a',
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 24,
  },
  avatarContainer: {
    position: 'relative',
    marginBottom: 16,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  avatarPlaceholder: {
    backgroundColor: '#334155',
    justifyContent: 'center',
    alignItems: 'center',
  },
  uploadingOverlay: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  editButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#1e293b',
    borderRadius: 20,
    padding: 6,
    borderWidth: 2,
    borderColor: '#0f172a',
  },
  userName: {
    color: '#f8fafc',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
    maxWidth: '90%',
  },
  userEmail: {
    color: '#94a3b8',
    fontSize: 14,
    marginTop: 4,
    textAlign: 'center',
    maxWidth: '90%',
    alignSelf: 'center',
    paddingHorizontal: 8,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    color: '#f8fafc',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  overallStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#1e293b',
    borderRadius: 12,
    padding: 12,
    gap: 8,
  },
  overallStatItem: {
    flex: 1,
    backgroundColor: '#0f172a',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
    minWidth: 0,
  },
  overallStatValue: {
    color: '#f8fafc',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  overallStatLabel: {
    color: '#94a3b8',
    fontSize: 12,
    textAlign: 'center',
    flexShrink: 1,
    width: '100%',
  },
  levelContainer: {
    backgroundColor: '#1e293b',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderLeftWidth: 4,
  },
  levelHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  levelTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  levelStatsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
    minWidth: 0,
    paddingHorizontal: 4,
    justifyContent: 'center',
  },
  statItemValue: {
    color: '#f8fafc',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 2,
    textAlign: 'center',
    width: '100%',
    paddingHorizontal: 2,
  },
  statItemLabel: {
    color: '#94a3b8',
    fontSize: 12,
    textAlign: 'center',
    width: '100%',
    paddingHorizontal: 2,
    textTransform: 'uppercase',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#ef4444',
    borderRadius: 8,
    paddingVertical: 12,
    marginTop: 8,
  },
  logoutText: {
    color: '#ef4444',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
});