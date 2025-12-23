// app/(main)/quiz/_layout.jsx
import { Stack } from 'expo-router';

export default function QuizLayout() {
  return (
    <Stack>
      <Stack.Screen 
        name="[category]" 
        options={({ route }) => ({ 
          title: route?.params?.categoryName || 'Learning',
          headerBackTitle: 'Back',
          headerStyle: { 
            backgroundColor: '#0f172a',
            borderBottomColor: '#1e293b',
          },
          headerTintColor: '#f8fafc',
          statusBarStyle: 'light',
        })} 
      />

      <Stack.Screen 
        name="level-selection" 
        options={{ 
          title: 'Select Level',
          headerShown: true,
          headerStyle: { 
            backgroundColor: '#0f172a',
            borderBottomColor: '#1e293b',
          },
          headerTintColor: '#f8fafc',
        }} 
      />
      <Stack.Screen 
        name="start" 
        options={{ 
          title: 'Quiz',
          headerShown: true,
          headerBackTitle: 'Back',
          headerStyle: { 
            backgroundColor: '#0f172a',
            borderBottomColor: '#1e293b',
          },
          headerTintColor: '#f8fafc',
        }} 
      />
    </Stack>
  );
}