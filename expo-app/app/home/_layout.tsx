import { Tabs } from 'expo-router';

export default function HomeLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="home" options={{ title: 'Home', headerShown: false }} />
      <Tabs.Screen name="tasks" options={{ title: 'Tasks' }} />
      <Tabs.Screen name="configuration" options={{ title: 'Configuration' }} />
    </Tabs>
  );
}

