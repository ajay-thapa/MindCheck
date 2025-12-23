import { useLocalSearchParams, useRouter } from "expo-router";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  Animated,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { auth, db } from "../../../config/firebase";
import questionBanks from "../../data/questions";

export default function QuizScreen() {
  const { level } = useLocalSearchParams();
  const router = useRouter();
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState(
    level === "medium" ? 15 : level === "hard" ? 10 : 300
  );
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [isLoadingResults, setIsLoadingResults] = useState(false);
  const timerRef = useRef(null);
  const fadeAnim = useRef(new Animated.Value(1)).current;

  // Save quiz result to Firestore
  const saveQuizResult = async () => {
    try {
      const userId = auth.currentUser?.uid;
      if (!userId) {
        console.error("User not authenticated");
        return;
      }

      const userRef = doc(db, "users", userId);
      const timestamp = new Date().toISOString();

      const quizData = {
        level,
        score,
        totalQuestions: questions.length,
        percentage: Math.round((score / questions.length) * 100),
        timestamp,
      };

      const userDoc = await getDoc(userRef);
      const currentData = userDoc.exists() ? userDoc.data() : {};
      const currentHistory = currentData.quizHistory || [];

      await setDoc(
        userRef,
        {
          ...currentData,
          quizHistory: [...currentHistory, quizData],
          stats: {
            ...currentData.stats,
            [level]: {
              totalScore: (currentData.stats?.[level]?.totalScore || 0) + score,
              totalQuestions:
                (currentData.stats?.[level]?.totalQuestions || 0) +
                questions.length,
              attempts: (currentData.stats?.[level]?.attempts || 0) + 1,
              lastUpdated: timestamp,
            },
          },
          lastUpdated: timestamp,
        },
        { merge: true }
      );
    } catch (error) {
      console.error("Error saving quiz result:", error);
      throw error;
    }
  };

  // Initialize questions
  useEffect(() => {
    const shuffled = [...questionBanks[level]]
      .sort(() => 0.5 - Math.random())
      .slice(0, 10);
    setQuestions(shuffled);
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedOption(null);
    setShowResult(false);
    setQuizCompleted(false);
    setTimeLeft(level === "medium" ? 15 : level === "hard" ? 10 : 300);
  }, [level]);

  // Timer logic
  useEffect(() => {
    if (level !== "easy" && timeLeft > 0 && !showResult) {
      timerRef.current = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    } else if (timeLeft === 0 && !showResult) {
      handleTimeUp();
    }
    return () => clearTimeout(timerRef.current);
  }, [timeLeft, showResult]);

  const handleAnswer = (selectedAnswer) => {
    if (showResult) return;

    clearTimeout(timerRef.current);
    setSelectedOption(selectedAnswer);

    if (questions[currentQuestionIndex]?.correctAnswer === selectedAnswer) {
      setScore(score + 1);
    }

    setTimeout(() => {
      setShowResult(true);
      Animated.timing(fadeAnim, {
        toValue: 0.7,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }, 300);
  };

  const handleTimeUp = () => {
    clearTimeout(timerRef.current);
    setShowResult(true);
    Animated.timing(fadeAnim, {
      toValue: 0.7,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const getMotivationalMessage = (percentage) => {
    if (percentage >= 90) return "Outstanding! You're a true expert!";
    if (percentage >= 70) return "Excellent work! You know your stuff!";
    if (percentage >= 50) return "Good job! Keep learning and improving!";
    if (percentage >= 30) return "Not bad! A little more practice will help!";
    return "Keep trying! You'll get better with practice!";
  };

  const getPerformanceTips = (percentage) => {
    if (percentage >= 80) {
      return [
        "You're doing great! Try a harder level next time.",
        "Share your knowledge with others to reinforce what you've learned.",
        "Challenge yourself with more complex questions.",
      ];
    } else if (percentage >= 50) {
      return [
        "Review the questions you got wrong.",
        "Take your time reading each question carefully.",
        "Try to understand why the correct answer is right.",
      ];
    } else {
      return [
        "Spend more time studying the material before taking the quiz.",
        "Take notes while studying to help with retention.",
        "Try the quiz again after reviewing the material.",
      ];
    }
  };

  const getStreakMessage = (percentage) => {
    if (percentage >= 90) return "🔥 5-day streak! Keep it up!";
    if (percentage >= 70) return "🔥 3-day streak! You're on fire!";
    return "Complete more quizzes to start a streak!";
  };

  const handleNext = async () => {
    fadeAnim.setValue(1);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setShowResult(false);
      setTimeLeft(level === "medium" ? 15 : level === "hard" ? 10 : 300);
    } else {
      try {
        setIsLoadingResults(true);
        await saveQuizResult();
        setQuizCompleted(true);
      } catch (error) {
        console.error("Error saving quiz result:", error);
        setQuizCompleted(true);
      } finally {
        setIsLoadingResults(false);
      }
    }
  };

  const resetQuiz = () => {
    const shuffled = [...questionBanks[level]]
      .sort(() => 0.5 - Math.random())
      .slice(0, 10);
    setQuestions(shuffled);
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedOption(null);
    setShowResult(false);
    setQuizCompleted(false);
    setTimeLeft(level === "medium" ? 15 : level === "hard" ? 10 : 300);
  };

  if (questions.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.loadingText}>Loading questions...</Text>
      </View>
    );
  }

  if (quizCompleted) {
    const percentage = Math.round((score / questions.length) * 100);
    const message = getMotivationalMessage(percentage);
    const tips = getPerformanceTips(percentage);
    const streakMessage = getStreakMessage(percentage);
    const correctCount = score;
    const incorrectCount = questions.length - score;
    const accuracy = Math.round((correctCount / questions.length) * 100);

    return (
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.completedContainer}>
          <View style={styles.resultHeader}>
            <Text style={styles.completedTitle}>Quiz Completed! 🎉</Text>
            <Text style={styles.streakText}>{streakMessage}</Text>
          </View>

          <View style={styles.scoreCircle}>
            <Text style={styles.scoreText}>
              {score}
              <Text style={styles.scoreTotal}>/{questions.length}</Text>
            </Text>
            <Text style={styles.percentage}>{percentage}%</Text>
          </View>

          <View style={styles.statsContainer}>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>{correctCount}</Text>
              <Text style={styles.statLabel}>Correct hh</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={[styles.statValue, { color: "#ef4444" }]}>
                {incorrectCount}
              </Text>
              <Text style={styles.statLabel}>Incorrect hh</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>{accuracy}%</Text>
              <Text style={styles.statLabel}>Accuracy</Text>
            </View>
          </View>

          <View style={styles.resultCard}>
            <Text style={styles.motivationText}>{message}</Text>

            <View style={styles.tipsContainer}>
              <Text style={styles.tipsTitle}>Tips to improve:</Text>
              {tips.map((tip, index) => (
                <View key={index} style={styles.tipItem}>
                  <Text style={styles.tipBullet}>•</Text>
                  <Text style={styles.tipText}>{tip}</Text>
                </View>
              ))}
            </View>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.actionButton, { backgroundColor: "#6366f1" }]}
              onPress={() => router.push("/(main)/(tabs)/home")}
            >
              <Text style={styles.buttonText}>Back to Home</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.actionButton, { backgroundColor: "#10b981" }]}
              onPress={resetQuiz}
            >
              <Text style={styles.buttonText}>Try Again</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const progress = (currentQuestionIndex / questions.length) * 100;
  const timerColor = timeLeft <= 5 ? "#ef4444" : "#f8fafc";

  return (
    <View style={{ flex: 1 }}>
      <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
        <View style={styles.header}>
          <View style={styles.progressContainer}>
            <View style={[styles.progressBar, { width: `${progress}%` }]} />
          </View>
          <View style={styles.headerInfo}>
            <Text style={styles.questionCount}>
              Question {currentQuestionIndex + 1}
              <Text style={styles.totalQuestions}>/{questions.length}</Text>
            </Text>
            <Text style={styles.score}>Score: {score}</Text>
          </View>
        </View>

        {level !== "easy" && (
          <View style={styles.timerContainer}>
            <Text style={[styles.timerText, { color: timerColor }]}>
              {timeLeft}s
            </Text>
          </View>
        )}

        <View style={styles.questionContainer}>
          <Text style={styles.question}>
            {currentQuestionIndex + 1}. {currentQuestion.question}
          </Text>

          <View style={styles.optionsContainer}>
            {currentQuestion.options.map((option, index) => {
              let optionStyle = [styles.option];
              let textStyle = styles.optionText;

              if (showResult) {
                if (option === currentQuestion.correctAnswer) {
                  optionStyle.push(styles.correctOption);
                  textStyle = [textStyle, styles.correctOptionText];
                } else if (option === selectedOption) {
                  optionStyle.push(styles.wrongOption);
                  textStyle = [textStyle, styles.wrongOptionText];
                }
              } else if (selectedOption === option) {
                optionStyle.push(styles.selectedOption);
              }

              return (
                <TouchableOpacity
                  key={index}
                  style={optionStyle}
                  onPress={() => handleAnswer(option)}
                  disabled={showResult}
                >
                  <Text style={textStyle}>{option}</Text>
                </TouchableOpacity>
              );
            })}
          </View>

          {showResult && (
            <TouchableOpacity
              style={styles.nextButton}
              onPress={handleNext}
              disabled={isLoadingResults}
            >
              <Text style={styles.nextButtonText}>
                {currentQuestionIndex < questions.length - 1
                  ? "Next Question"
                  : "See Results"}
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </Animated.View>

      {isLoadingResults && (
        <View style={styles.loadingOverlay}>
          <ActivityIndicator size="large" color="#6366f1" />
          <Text style={styles.loadingText}>
            Calculating your results hello
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f172a",
    padding: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0f172a",
  },
  loadingText: {
    color: "#f8fafc",
    fontSize: 18,
  },
  loadingOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(15, 23, 42, 0.9)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  completedContainer: {
    flex: 1,
    backgroundColor: "#0f172a",
    padding: 20,
    justifyContent: "space-between",
  },
  resultHeader: {
    alignItems: "center",
    marginBottom: 20,
  },
  completedTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#f8fafc",
    marginBottom: 5,
    textAlign: "center",
  },
  streakText: {
    color: "#f59e0b",
    fontSize: 16,
    fontWeight: "500",
  },
  scoreCircle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: "#1e293b",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginVertical: 20,
    borderWidth: 5,
    borderColor: "#6366f1",
  },
  scoreText: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#f8fafc",
  },
  scoreTotal: {
    fontSize: 24,
    color: "#94a3b8",
  },
  percentage: {
    fontSize: 24,
    color: "#94a3b8",
    marginTop: 5,
  },
  resultCard: {
    backgroundColor: "#1e293b",
    borderRadius: 16,
    padding: 20,
    marginTop: 20,
  },
  motivationText: {
    color: "#f8fafc",
    fontSize: 18,
    textAlign: "center",
    marginBottom: 15,
    lineHeight: 26,
  },
  tipsContainer: {
    marginTop: 15,
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: "#334155",
  },
  tipsTitle: {
    color: "#f8fafc",
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
  },
  tipItem: {
    flexDirection: "row",
    marginBottom: 8,
    alignItems: "flex-start",
  },
  tipBullet: {
    color: "#6366f1",
    fontSize: 16,
    marginRight: 8,
    lineHeight: 22,
  },
  tipText: {
    color: "#e2e8f0",
    fontSize: 15,
    lineHeight: 22,
    flex: 1,
  },
  // Update these styles in your StyleSheet
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 20,
    width: "100%", // Ensure full width
    paddingHorizontal: 10, // Add some padding
  },
  statItem: {
    alignItems: "center",
    padding: 12, // Adjusted padding
    backgroundColor: "#1e293b",
    borderRadius: 12,
    minWidth: 100,
    maxWidth: "33%", // Ensure items take equal space
    flex: 1, // Allow items to grow
    marginHorizontal: 5, // Add some space between items
  },
  statValue: {
    color: "#f8fafc",
    fontSize: 22, // Slightly reduced font size
    fontWeight: "700",
    marginBottom: 4,
    textAlign: "center", // Center text
  },
  statLabel: {
    color: "#94a3b8",
    fontSize: 14,
    textAlign: "center", // Center text
    flexWrap: "wrap", // Allow text to wrap
  },
  buttonContainer: {
    width: "100%",
    gap: 12,
    marginTop: 20,
  },
  actionButton: {
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
  },
  buttonText: {
    color: "#f8fafc",
    fontSize: 16,
    fontWeight: "600",
  },
  header: {
    marginBottom: 20,
  },
  headerInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  progressContainer: {
    height: 6,
    backgroundColor: "#1e293b",
    borderRadius: 3,
    overflow: "hidden",
    marginBottom: 10,
  },
  progressBar: {
    height: "100%",
    backgroundColor: "#6366f1",
    borderRadius: 3,
  },
  questionCount: {
    color: "#f8fafc",
    fontSize: 18,
    fontWeight: "600",
  },
  totalQuestions: {
    color: "#94a3b8",
  },
  score: {
    color: "#f8fafc",
    fontSize: 18,
    fontWeight: "600",
  },
  timerContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  timerText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  questionContainer: {
    flex: 1,
  },
  question: {
    color: "#f8fafc",
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 30,
    lineHeight: 32,
  },
  optionsContainer: {
    gap: 12,
  },
  option: {
    backgroundColor: "#1e293b",
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#334155",
  },
  optionText: {
    color: "#f8fafc",
    fontSize: 16,
    lineHeight: 22,
  },
  selectedOption: {
    borderColor: "#6366f1",
    backgroundColor: "rgba(99, 102, 241, 0.1)",
  },
  correctOption: {
    backgroundColor: "rgba(16, 185, 129, 0.2)",
    borderColor: "#10b981",
  },
  correctOptionText: {
    color: "#10b981",
    fontWeight: "600",
  },
  wrongOption: {
    backgroundColor: "rgba(239, 68, 68, 0.2)",
    borderColor: "#ef4444",
  },
  wrongOptionText: {
    color: "#ef4444",
    textDecorationLine: "line-through",
  },
  nextButton: {
    marginTop: 30,
    backgroundColor: "#6366f1",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
  },
  nextButtonText: {
    color: "#f8fafc",
    fontSize: 16,
    fontWeight: "600",
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: 40,
    width: "100%",
  },
});
