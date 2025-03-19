import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false, // Hides the text under icons globally
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ size }) => (
            <Ionicons name="home-outline" size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarIcon: ({ size }) => (
            <Ionicons name="search-outline" size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="add"
        options={{
          tabBarIcon: ({ size }) => (
            <Ionicons name="add-outline" size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          tabBarIcon: ({ size }) => (
            <Ionicons name="notifications-outline" size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ size }) => (
            <Ionicons name="person-outline" size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
