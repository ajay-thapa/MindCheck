import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { signOut } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { ActivityIndicator, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { auth, db } from '../../../config/firebase';

// Badge helper function
const getBadgeInfo = (percentage) => {
  if (percentage >= 90) return { text: 'Master', color: '#9c27b0', icon: 'trophy' };
  if (percentage >= 75) return { text: 'Excellent', color: '#2196f3', icon: 'star' };
  if (percentage >= 50) return { text: 'Good', color: '#4caf50', icon: 'checkmark-circle' };
  if (percentage > 0) return { text: 'Keep Trying', color: '#ff9800', icon: 'flame' };
  return { text: 'Newbie', color: '#9e9e9e', icon: 'rocket' };
};

const ProgressBar = ({ progress, color }) => (
  <View style={styles.progressBar}>
    <View 
      style={[
        styles.progressFill, 
        { 
          width: `${progress}%`,
          backgroundColor: color,
        }
      ]} 
    />
  </View>
);

const DifficultyCard = ({ title, description, progress, color, icon, onPress }) => {
  const badge = getBadgeInfo(progress);
  
  return (
    <TouchableOpacity 
      style={styles.card}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <View style={[styles.cardIcon, { backgroundColor: `${color}20` }]}>
        <Ionicons name={icon} size={24} color={color} />
      </View>
      <View style={styles.cardContent}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardTitle}>{title}</Text>
          <View style={[styles.badge, { backgroundColor: `${badge.color}20` }]}>
            <Ionicons 
              name={badge.icon} 
              size={14} 
              color={badge.color} 
              style={styles.badgeIcon} 
            />
            <Text style={[styles.badgeText, { color: badge.color }]}>
              {badge.text}
            </Text>
          </View>
        </View>
        <Text style={styles.cardDescription}>{description}</Text>
        <View style={styles.progressContainer}>
          <ProgressBar progress={progress} color={color} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default function Home() {
  const defaultStats = {
    easy: { totalScore: 0, totalQuestions: 0, attempts: 0, lastUpdated: null },
    medium: { totalScore: 0, totalQuestions: 0, attempts: 0, lastUpdated: null },
    hard: { totalScore: 0, totalQuestions: 0, attempts: 0, lastUpdated: null }
  };

  const [stats, setStats] = useState(defaultStats);
  const [loading, setLoading] = useState(true);
  const user = auth.currentUser;
  const username = user?.displayName || 'Quiz Master';

  useEffect(() => {
    const fetchStats = async () => {
      if (!user) return;
      
      try {
        const userDoc = await getDoc(doc(db, 'users', user.uid));
        if (userDoc.exists()) {
          const userData = userDoc.data();
          const mergedStats = {
            ...defaultStats,
            ...(userData.stats || {})
          };
          setStats(mergedStats);
        }
      } catch (error) {
        console.error('Error fetching stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, [user]);

  const calculatePercentage = (level) => {
    const levelStats = stats?.[level] || {};
    if (!levelStats.totalQuestions || levelStats.totalQuestions === 0) return 0;
    return Math.min(Math.round((levelStats.totalScore / levelStats.totalQuestions) * 100), 100);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const handleDifficultyPress = (level) => {
    router.push(`/(main)/Quiz/start?level=${level}`);
  };

  const getMotivationalTip = (hardPercentage) => {
    if (hardPercentage >= 80) {
      return "You're a quiz master! Keep up the great work! 🎯";
    } else if (hardPercentage >= 50) {
      return "Great progress! Try to attempt more hard questions! 💪";
    } else if (hardPercentage > 0) {
      return "Every attempt makes you better! Keep going! 🚀";
    }
    return "Start your journey to become a quiz champion! 🏆";
  };

  if (loading) {
    return (
      <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
        <ActivityIndicator size="large" color="#6366f1" />
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.welcomeText}>Welcome back,</Text>
          <Text style={styles.username}>{username} 👋</Text>
        </View>
        <TouchableOpacity onPress={handleLogout} style={styles.avatar} activeOpacity={0.7}>
          <Ionicons name="log-out-outline" size={24} color="#ef4444" />
        </TouchableOpacity>
      </View>

  {/* Progress Summary */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Overall Percentage</Text>
        <View style={styles.progressSummary}>
          <View style={styles.progressItem}>
            <Text style={styles.progressLabel}>Easy</Text>
            <Text style={[styles.progressValue, { color: '#10b981' }]}>
              {calculatePercentage('easy')}%
            </Text>
            
          </View>
          <View style={styles.progressItem}>
            <Text style={styles.progressLabel}>Medium</Text>
            <Text style={[styles.progressValue, { color: '#f59e0b' }]}>
              {calculatePercentage('medium')}%
            </Text>
            
          </View>
          <View style={styles.progressItem}>
            <Text style={styles.progressLabel}>Hard</Text>
            <Text style={[styles.progressValue, { color: '#ef4444' }]}>
              {calculatePercentage('hard')}%
            </Text>
            
          </View>
        </View>
      </View>

      {/* Difficulty Cards */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>How Good Are You?</Text>
        <DifficultyCard
          title="Easy"
          description="Perfect for beginners"
          progress={calculatePercentage('easy')}
          color="#10b981"
          icon="school-outline"
          onPress={() => handleDifficultyPress('easy')}
        />
        <DifficultyCard
          title="Medium"
          description="Challenge yourself"
          progress={calculatePercentage('medium')}
          color="#f59e0b"
          icon="barbell-outline"
          onPress={() => handleDifficultyPress('medium')}
        />
        <DifficultyCard
          title="Hard"
          description="Test your limits"
          progress={calculatePercentage('hard')}
          color="#ef4444"
          icon="trophy-outline"
          onPress={() => handleDifficultyPress('hard')}
        />
      </View>

      {/* Motivational Tip */}
      <View style={styles.tipContainer}>
        <Ionicons name="bulb-outline" size={20} color="#f59e0b" />
        <Text style={styles.tipText}>
          {getMotivationalTip(calculatePercentage('hard'))}
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  welcomeText: {
    color: '#94a3b8',
    fontSize: 16,
  },
  username: {
    color: '#f8fafc',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 4,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#1e293b',
    justifyContent: 'center',
    alignItems: 'center',
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    color: '#f8fafc',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  progressSummary: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#1e293b',
    borderRadius: 12,
    padding: 24,
  },
  progressItem: {
    alignItems: 'center',
    flex: 1,
  },
  progressLabel: {
    color: '#94a3b8',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 4,
  },
  card: {
    backgroundColor: '#1e293b',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardIcon: {
    width: 48,
    height: 48,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  cardContent: {
    flex: 1,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  cardTitle: {
    color: '#f8fafc',
    fontSize: 16,
    fontWeight: '600',
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    paddingVertical: 2,
    paddingHorizontal: 8,
  },
  badgeIcon: {
    marginRight: 4,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '600',
  },
  cardDescription: {
    color: '#94a3b8',
    fontSize: 12,
    marginBottom: 8,
  },
  progressContainer: {
    marginTop: 8,
  },
  progressBar: {
    height: 4,
    backgroundColor: '#334155',
    borderRadius: 2,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: 2,
  },
  tipContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1e293b',
    borderRadius: 12,
    padding: 16,
    marginTop: 8,
  },
  tipText: {
    color: '#f8fafc',
    fontSize: 14,
    marginLeft: 12,
    flex: 1,
  },
});