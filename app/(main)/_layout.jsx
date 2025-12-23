import { Stack } from 'expo-router';

export default function MainLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: '#0f172a' },
      }}
    >
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="Quiz/start" />
      <Stack.Screen name="Quiz/level-selection" />
    </Stack>
  );
}