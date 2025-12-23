import { useLocalSearchParams, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, TouchableOpacity, useColorScheme, View } from 'react-native';
import { questionsByCategory } from '../../data/learingQuestions';

const LearningScreen = () => {
  const { category, categoryName } = useLocalSearchParams();
  const router = useRouter();
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const [currentIndex, setCurrentIndex] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  const theme = {
    background: isDark ? '#0f172a' : '#f8f9fa',
    card: isDark ? '#1e293b' : '#ffffff',
    text: isDark ? '#f8fafc' : '#1e293b',
    secondaryText: isDark ? '#94a3b8' : '#64748b',
    border: isDark ? '#334155' : '#e2e8f0',
    primary: '#6366f1',
  };

  useEffect(() => {
    const loadQuestions = () => {
      try {
        if (!questionsByCategory) {
          throw new Error('Learning content not available');
        }

        const categoryQuestions = questionsByCategory[category] || [];
        
        if (categoryQuestions.length === 0) {
          throw new Error(`No content available for: ${categoryName || category}`);
        }

        setQuestions(categoryQuestions);
      } catch (error) {
        console.error('Error loading content:', error);
        Alert.alert('Error', error.message || 'Failed to load learning content');
      } finally {
        setLoading(false);
      }
    };

    loadQuestions();
  }, [category]);

  const currentQuestion = questions[currentIndex];

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  if (loading) {
    return (
      <View style={[styles.container, { backgroundColor: theme.background }]}>
        <Text style={[styles.loadingText, { color: theme.text }]}>Loading content...</Text>
      </View>
    );
  }

  if (questions.length === 0) {
    return (
      <View style={[styles.container, { backgroundColor: theme.background }]}>
        <Text style={[styles.noContent, { color: theme.text }]}>No content available for this category.</Text>
        <TouchableOpacity 
          style={[styles.button, { backgroundColor: theme.primary }]}
          onPress={() => router.back()}
        >
          <Text style={styles.buttonText}>Go Back</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Progress Indicator */}
        <View style={styles.progressContainer}>
          <View style={[styles.progressBar, { backgroundColor: theme.border }]}>
            <View
              style={[
                styles.progressFill,
                { 
                  width: `${((currentIndex + 1) / questions.length) * 100}%`,
                  backgroundColor: theme.primary 
                }
              ]}
            />
          </View>
          <Text style={[styles.progressText, { color: theme.secondaryText }]}>
            {currentIndex + 1} of {questions.length}
          </Text>
        </View>

        {/* Question Card */}
        <View style={[styles.card, { backgroundColor: theme.card }]}>
          <Text style={[styles.question, { color: theme.text }]}>
            {currentQuestion.question}
          </Text>
          
          {/* Explanation */}
          <View style={[styles.section, { borderTopColor: theme.border }]}>
            <Text style={[styles.sectionTitle, { color: theme.primary }]}>Explanation</Text>
            <Text style={[styles.explanation, { color: theme.text }]}>
              {currentQuestion.explanation}
            </Text>
          </View>

          {/* Key Points */}
          <View style={[styles.section, { borderTopColor: theme.border }]}>
            <Text style={[styles.sectionTitle, { color: theme.primary }]}>Key Points</Text>
            <View style={styles.keyPoints}>
              {currentQuestion.options.map((option, index) => (
                <View 
                  key={index} 
                  style={[
                    styles.keyPoint, 
                    { 
                      backgroundColor: isDark ? '#1e293b' : '#f1f5f9',
                      borderColor: option === currentQuestion.correctAnswer 
                        ? '#10b981' 
                        : (isDark ? '#334155' : '#e2e8f0')
                    }
                  ]}
                >
                  <View 
                    style={[
                      styles.keyPointBullet, 
                      { 
                        backgroundColor: option === currentQuestion.correctAnswer 
                          ? '#10b981' 
                          : (isDark ? '#334155' : '#e2e8f0')
                      }
                    ]}
                  />
                  <Text style={[styles.keyPointText, { color: theme.text }]}>
                    {option}
                  </Text>
                </View>
              ))}
            </View>
          </View>

          {/* Additional Notes */}
          {currentQuestion.additionalNotes && (
            <View style={[styles.section, { borderTopColor: theme.border }]}>
              <Text style={[styles.sectionTitle, { color: theme.primary }]}>Additional Notes</Text>
              <Text style={[styles.notes, { color: theme.text }]}>
                {currentQuestion.additionalNotes}
              </Text>
            </View>
          )}
        </View>
      </ScrollView>

      {/* Navigation Buttons */}
      <View style={[styles.navButtons, { borderTopColor: theme.border }]}>
        <TouchableOpacity
          style={[
            styles.navButton,
            currentIndex === 0 && styles.navButtonDisabled,
            { backgroundColor: theme.card }
          ]}
          onPress={handlePrevious}
          disabled={currentIndex === 0}
        >
          <Text 
            style={[
              styles.navButtonText,
              { 
                color: currentIndex === 0 ? theme.secondaryText : theme.primary,
                opacity: currentIndex === 0 ? 0.5 : 1
              }
            ]}
          >
            Previous
          </Text>
        </TouchableOpacity>
        
        <View style={styles.pageIndicator}>
          <Text style={[styles.pageText, { color: theme.secondaryText }]}>
            {currentIndex + 1} / {questions.length}
          </Text>
        </View>
        
        <TouchableOpacity
          style={[
            styles.navButton,
            currentIndex === questions.length - 1 && styles.navButtonDisabled,
            { backgroundColor: theme.primary }
          ]}
          onPress={handleNext}
          disabled={currentIndex === questions.length - 1}
        >
          <Text style={[styles.navButtonText, { color: 'white' }]}>
            {currentIndex === questions.length - 1 ? 'Finish' : 'Next'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 80,
  },
  progressContainer: {
    marginBottom: 20,
  },
  progressBar: {
    height: 6,
    borderRadius: 3,
    overflow: 'hidden',
    marginBottom: 8,
  },
  progressFill: {
    height: '100%',
    borderRadius: 3,
  },
  progressText: {
    fontSize: 12,
    textAlign: 'right',
  },
  card: {
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  question: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 20,
    lineHeight: 30,
  },
  section: {
    paddingTop: 20,
    marginTop: 20,
    borderTopWidth: 1,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 12,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  explanation: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 4,
  },
  keyPoints: {
    marginTop: 8,
  },
  keyPoint: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
    borderWidth: 1,
  },
  keyPointBullet: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginRight: 12,
    marginTop: 2,
  },
  keyPointText: {
    flex: 1,
    fontSize: 15,
    lineHeight: 22,
  },
  notes: {
    fontSize: 14,
    lineHeight: 22,
    fontStyle: 'italic',
    opacity: 0.9,
  },
  navButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderTopWidth: 1,
    backgroundColor: 'rgba(15, 23, 42, 0.8)',
  },
  navButton: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    minWidth: 100,
    alignItems: 'center',
  },
  navButtonDisabled: {
    opacity: 0.6,
  },
  navButtonText: {
    fontWeight: '600',
    fontSize: 16,
  },
  pageIndicator: {
    alignItems: 'center',
  },
  pageText: {
    fontSize: 14,
    fontWeight: '500',
  },
  loadingText: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
  noContent: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
});

export default LearningScreen;