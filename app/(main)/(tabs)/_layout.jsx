import { Ionicons } from '@expo/vector-icons';
import { Tabs, useRouter } from 'expo-router';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Custom header component
function CustomHeader({ title }) {
  const router = useRouter();

  const handleSettingsPress = () => {
    router.push('/(main)/settings');
  };

  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>
        {title === 'home' ? 'Home' : 
         title === 'quiz' ? 'Quiz' : 
         title === 'explore' ? 'Explore' : 
         title === 'profile' ? 'Profile' : title}
      </Text>
      <View style={styles.rightIconsContainer}>
        <TouchableOpacity 
          onPress={handleSettingsPress} 
          style={styles.settingsButton}
        >
          <Ionicons name="settings" size={24} color="#f8fafc" />
        </TouchableOpacity>
        <Image 
          source={require('../../../assets/images/logoo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
    </View>
  );
}

export default function TabLayout() {
  return (
    <View style={styles.container}>
      <Tabs
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: '#6366f1',
          tabBarInactiveTintColor: '#94a3b8',
          tabBarStyle: {
            backgroundColor: '#1e293b',
            borderTopColor: '#334155',
          },
          headerStyle: {
            backgroundColor: '#0f172a',
            borderBottomColor: '#1e293b',
          },
          headerTintColor: '#f8fafc',
          headerTitle: (props) => <CustomHeader title={route.name} {...props} />,
          headerTitleAlign: 'left',
          headerTitleStyle: {
            fontWeight: '600',
          },
          tabBarLabelStyle: {
            fontSize: 12,
            marginBottom: 4,
          },
        })}
      >
        <Tabs.Screen
          name="home"
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <Ionicons 
                name={focused ? 'home' : 'home-outline'} 
                size={size} 
                color={color} 
              />
            ),
          }}
        />
        <Tabs.Screen
          name="quiz"
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <Ionicons 
                name={focused ? 'help-circle' : 'help-circle-outline'} 
                size={size} 
                color={color} 
              />
            ),
          }}
        />
        <Tabs.Screen
          name="explore"
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <Ionicons 
                name={focused ? 'explore' : 'explore-outline'} 
                size={size} 
                color={color} 
              />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <Ionicons 
                name={focused ? 'person' : 'person-outline'} 
                size={size} 
                color={color} 
              />
            ),
          }}
        />
      </Tabs>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 2,
  },
  headerTitle: {
    color: '#f8fafc',
    fontSize: 20,
    fontWeight: '600',
  },
  logo: {
    width: 70,
    height: 70,
  },
  rightIconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingsButton: {
    marginRight: 10,
    padding: 4,
  },
});