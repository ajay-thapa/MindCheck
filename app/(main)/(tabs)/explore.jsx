// app/(main)/(tabs)/explore.jsx
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  useColorScheme,
} from "react-native";
import { categories as quizCategories } from "../../data/learingQuestions";

const Explore = () => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  // Map the categories from the questions file
  const categories = quizCategories.map((cat) => ({
    id: cat.id,
    title: cat.name,
    icon: cat.icon,
    color: cat.color,
    description: cat.description,
    questions: cat.totalQuestions,
  }));

  const popularQuizzes = [
    {
      id: "1",
      title: "World Capitals Challenge",
      category: "general",
      questions: 20,
      time: 15,
      difficulty: "Medium",
      completed: "85%",
    },
    {
      id: "2",
      title: "Science Fundamentals",
      category: "science",
      questions: 15,
      time: 10,
      difficulty: "Easy",
      completed: "60%",
    },
  ];

  const theme = {
    background: isDark ? "#0f172a" : "#f8f9fa",
    card: isDark ? "#1e293b" : "#fff",
    text: isDark ? "#f8fafc" : "#1e293b",
    secondaryText: isDark ? "#94a3b8" : "#64748b",
    border: isDark ? "#334155" : "#e2e8f0",
  };

  const navigateToQuiz = (category) => {
    console.log("Navigating to category:", category.id);
    router.push({
      pathname: "/(main)/Quiz/[category]",
      params: {
        category: category.id.toLowerCase(),
        categoryName: category.title,
      },
    });
  };

  const navigateToQuizById = (quiz) => {
    console.log("Navigating to quiz:", quiz.id);
    router.push({
      pathname: "/(main)/Quiz/[category]",
      params: {
        category: quiz.category,
        quizId: quiz.id,
        categoryName: quiz.title,
      },
    });
  };

  const startDailyChallenge = () => {
    Alert.alert("Daily Challenge", "Feature coming soon!");
  };

  const showRecommended = (type) => {
    Alert.alert("Recommended", `${type} feature coming soon!`);
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={[styles.headerSubtitle, { color: theme.secondaryText }]}>
            Discover and learn with our quizzes
          </Text>
        </View>

        {/* Search Bar */}
        <View
          style={[
            styles.searchBar,
            {
              backgroundColor: theme.card,
              borderColor: theme.border,
            },
          ]}
        >
          <Ionicons
            name="search"
            size={20}
            color={theme.secondaryText}
            style={{ marginRight: 10 }}
          />
          <TextInput
            style={[styles.searchInput, { color: theme.text }]}
            placeholder="Search Quizzes"
            placeholderTextColor={theme.secondaryText}
            value={searchQuery}
            onChangeText={setSearchQuery}
            autoCorrect={false}
            autoCapitalize="none"
            returnKeyType="search"
            onSubmitEditing={() => {
              // Handle search submission here if needed
              console.log("Search for:", searchQuery);
            }}
          />
        </View>

        {/* Categories Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={[styles.sectionTitle, { color: theme.text }]}>
              Categories
            </Text>
            <TouchableOpacity onPress={() => showRecommended("All Categories")}>
              <Text style={[styles.seeAll, { color: "#6366f1" }]}>See All</Text>
            </TouchableOpacity>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoriesContainer}
          >
            {categories.map((category) => (
              <TouchableOpacity
                key={category.id}
                style={[styles.categoryCard, { backgroundColor: theme.card }]}
                onPress={() => navigateToQuiz(category)}
              >
                <LinearGradient
                  colors={[`${category.color}20`, `${category.color}10`]}
                  style={styles.categoryIcon}
                >
                  <Ionicons
                    name={category.icon}
                    size={24}
                    color={category.color}
                  />
                </LinearGradient>
                <Text
                  style={[styles.categoryTitle, { color: theme.text }]}
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  {category.title}
                </Text>
                <Text
                  style={[
                    styles.categoryQuestions,
                    { color: theme.secondaryText },
                  ]}
                >
                  {category.questions} quizzes
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Popular Quizzes */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={[styles.sectionTitle, { color: theme.text }]}>
              Popular Quizzes
            </Text>
            <TouchableOpacity
              onPress={() => showRecommended("Popular Quizzes")}
            >
              <Text style={[styles.seeAll, { color: "#6366f1" }]}>See All</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.quizzesContainer}>
            {popularQuizzes.map((quiz, index) => (
              <TouchableOpacity
                key={quiz.id}
                style={[
                  styles.quizCard,
                  {
                    backgroundColor: theme.card,
                    marginTop: index > 0 ? 12 : 0,
                  },
                ]}
                onPress={() => navigateToQuizById(quiz)}
              >
                <View style={styles.quizInfo}>
                  <Text
                    style={[styles.quizTitle, { color: theme.text }]}
                    numberOfLines={1}
                  >
                    {quiz.title}
                  </Text>
                  <View style={styles.quizMeta}>
                    <Text
                      style={[
                        styles.quizMetaText,
                        { color: theme.secondaryText },
                      ]}
                    >
                      {quiz.questions} Qs • {quiz.time} min
                    </Text>
                    <View
                      style={[
                        styles.difficultyBadge,
                        {
                          backgroundColor:
                            quiz.difficulty === "Easy"
                              ? "#10b98120"
                              : quiz.difficulty === "Medium"
                              ? "#f59e0b20"
                              : "#ef444420",
                          borderColor:
                            quiz.difficulty === "Easy"
                              ? "#10b981"
                              : quiz.difficulty === "Medium"
                              ? "#f59e0b"
                              : "#ef4444",
                        },
                      ]}
                    >
                      <Text
                        style={[
                          styles.difficultyText,
                          {
                            color:
                              quiz.difficulty === "Easy"
                                ? "#10b981"
                                : quiz.difficulty === "Medium"
                                ? "#f59e0b"
                                : "#ef4444",
                          },
                        ]}
                      >
                        {quiz.difficulty}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.progressContainer}>
                    <View style={styles.progressBar}>
                      <View
                        style={[
                          styles.progressFill,
                          {
                            width: quiz.completed,
                            backgroundColor:
                              quiz.completed === "100%" ? "#10b981" : "#6366f1",
                          },
                        ]}
                      />
                    </View>
                    <Text
                      style={[
                        styles.progressText,
                        { color: theme.secondaryText },
                      ]}
                    >
                      {quiz.completed} completed
                    </Text>
                  </View>
                </View>
                <Ionicons
                  name="chevron-forward"
                  size={20}
                  color={theme.secondaryText}
                />
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Daily Challenge */}
        <View style={[styles.challengeCard, { backgroundColor: "#6366f1" }]}>
          <View>
            <Text style={styles.challengeBadge}>DAILY CHALLENGE</Text>
            <Text style={styles.challengeTitle}>Test your knowledge now!</Text>
            <Text style={styles.challengeDescription}>
              Complete today's challenge to earn bonus points
            </Text>
            <TouchableOpacity
              style={styles.challengeButton}
              onPress={startDailyChallenge}
            >
              <Text style={styles.challengeButtonText}>Start Challenge</Text>
            </TouchableOpacity>
          </View>
          <Image
            source={require("../../../assets/images/trophy.png")}
            style={styles.challengeImage}
          />
        </View>

        {/* Recommended For You */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={[styles.sectionTitle, { color: theme.text }]}>
              Recommended For You
            </Text>
          </View>
          <View style={styles.recommendedContainer}>
            {[1, 2].map((item) => (
              <TouchableOpacity
                key={item}
                style={[
                  styles.recommendedCard,
                  { backgroundColor: theme.card },
                ]}
                onPress={() =>
                  showRecommended(item === 1 ? "Weak Areas" : "New Quizzes")
                }
              >
                <View style={styles.recommendedContent}>
                  <View
                    style={[
                      styles.recommendedIcon,
                      { backgroundColor: "#6366f120" },
                    ]}
                  >
                    <Ionicons name="star" size={20} color="#6366f1" />
                  </View>
                  <View>
                    <Text
                      style={[styles.recommendedTitle, { color: theme.text }]}
                    >
                      {item === 1 ? "Your Weak Areas" : "New Quizzes Added"}
                    </Text>
                    <Text
                      style={[
                        styles.recommendedSubtitle,
                        { color: theme.secondaryText },
                      ]}
                    >
                      {item === 1
                        ? "Practice questions based on your performance"
                        : "Check out our latest quiz collections"}
                    </Text>
                  </View>
                </View>
                <Ionicons
                  name="chevron-forward"
                  size={20}
                  color={theme.secondaryText}
                />
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 24,
  },
  header: {
    marginBottom: 24,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 16,
    color: "#64748b",
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    height: 48,
    borderRadius: 12,
    borderWidth: 1,
    marginBottom: 24,
  },
  searchInput: {
    flex: 1,
    height: "100%",
    fontFamily: "Inter_400Regular",
    fontSize: 16,
    padding: 0,
    margin: 0,
    includeFontPadding: false,
  },
  searchText: {
    marginLeft: 12,
    fontSize: 16,
  },
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  seeAll: {
    fontSize: 14,
    fontWeight: "600",
  },
  categoriesContainer: {
    paddingBottom: 8,
  },
  categoryCard: {
    width: 140,
    padding: 16,
    borderRadius: 12,
    marginRight: 12,
  },
  categoryIcon: {
    width: 48,
    height: 48,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
  },
  categoryQuestions: {
    fontSize: 12,
    opacity: 0.8,
  },
  quizzesContainer: {
    marginTop: 8,
  },
  quizCard: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderRadius: 12,
  },
  quizInfo: {
    flex: 1,
    marginRight: 12,
  },
  quizTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
  },
  quizMeta: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  quizMetaText: {
    fontSize: 12,
    marginRight: 8,
  },
  difficultyBadge: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
    borderWidth: 1,
  },
  difficultyText: {
    fontSize: 10,
    fontWeight: "600",
    textTransform: "uppercase",
  },
  progressContainer: {
    marginTop: 8,
  },
  progressBar: {
    height: 4,
    backgroundColor: "rgba(0,0,0,0.1)",
    borderRadius: 2,
    marginBottom: 4,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    borderRadius: 2,
  },
  progressText: {
    fontSize: 10,
  },
  challengeCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    borderRadius: 16,
    marginBottom: 24,
    overflow: "hidden",
  },
  challengeBadge: {
    color: "white",
    fontSize: 10,
    fontWeight: "700",
    letterSpacing: 1,
    marginBottom: 8,
    textTransform: "uppercase",
  },
  challengeTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 4,
  },
  challengeDescription: {
    color: "rgba(255,255,255,0.8)",
    fontSize: 12,
    marginBottom: 16,
    maxWidth: "80%",
  },
  challengeButton: {
    backgroundColor: "white",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    alignSelf: "flex-start",
  },
  challengeButtonText: {
    color: "#6366f1",
    fontWeight: "600",
    fontSize: 14,
  },
  challengeImage: {
    width: 100,
    height: 100,
    position: "absolute",
    right: 0,
    bottom: 0,
  },
  recommendedContainer: {
    marginTop: 8,
  },
  recommendedCard: {
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  recommendedContent: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  recommendedIcon: {
    width: 40,
    height: 40,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  recommendedTitle: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 2,
  },
  recommendedSubtitle: {
    fontSize: 12,
    opacity: 0.8,
  },
});

export default Explore;
