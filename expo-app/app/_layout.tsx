import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="home" options={{ title: ' ', headerStyle: { backgroundColor: '#650098' }, headerTintColor: '#fff', }}/>
    </Stack>
  );
}