import { Tabs } from 'expo-router'
import { Icon } from 'react-native-elements'

export default function HomeLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName
          if (route.name === 'home') {
            iconName = 'home';
          } else if (route.name === 'tasks') {
            iconName = 'tasks';
          } else if (route.name === 'configuration') {
            iconName = 'cogs';
          }
          color = focused ? '#650098' : '#DC7633';
          return <Icon name={iconName} type="font-awesome" color={color} size={size} />
        },
        tabBarActiveTintColor: '#650098',
        tabBarInactiveTintColor: '#DC7633',
      })}
    >

      <Tabs.Screen name="home" options={{ title: 'Home', headerShown: false}}/>
      <Tabs.Screen
        name="tasks" options={{ title: 'Tasks', headerShown:false,}}/>
      <Tabs.Screen
        name="configuration" options={{ title: 'Configuration', headerShown:false,}}/>
    </Tabs>
  )
}