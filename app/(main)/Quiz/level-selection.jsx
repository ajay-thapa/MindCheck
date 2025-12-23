import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const LevelCard = ({ title, description, color, icon, onPress }) => (
  <TouchableOpacity 
    style={[styles.card, { borderLeftColor: color }]} 
    onPress={onPress}
  >
    <View style={[styles.iconContainer, { backgroundColor: `${color}20` }]}>
      <Ionicons name={icon} size={32} color={color} />
    </View>
    <View style={styles.textContainer}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardDescription}>{description}</Text>
    </View>
    <Ionicons name="chevron-forward" size={24} color="#94a3b8" />
  </TouchableOpacity>
);

export default function LevelSelection() {
  const router = useRouter();

  const startQuiz = (level) => {
    router.push(`/(main)/Quiz/start?level=${level}`)
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Difficulty</Text>
      <Text style={styles.subtitle}>Choose a level to begin your quiz</Text>
      
      <View style={styles.cardsContainer}>
        <LevelCard
          title="Easy"
          description="Perfect for beginners"
          color="#10b981"
          icon="school-outline"
          onPress={() => startQuiz('easy')}
        />
        <LevelCard
          title="Medium"
          description="Challenge yourself"
          color="#f59e0b"
          icon="barbell-outline"
          onPress={() => startQuiz('medium')}
        />
        <LevelCard
          title="Hard"
          description="Test your limits"
          color="#ef4444"
          icon="trophy-outline"
          onPress={() => startQuiz('hard')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
    padding: 20,
    paddingTop: 40,
  },
  title: {
    color: '#f8fafc',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    color: '#94a3b8',
    fontSize: 16,
    marginBottom: 32,
  },
  cardsContainer: {
    gap: 16,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1e293b',
    borderRadius: 12,
    padding: 16,
    borderLeftWidth: 4,
  },
  iconContainer: {
    width: 56,
    height: 56,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  cardTitle: {
    color: '#f8fafc',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
  },
  cardDescription: {
    color: '#94a3b8',
    fontSize: 14,
  },
});