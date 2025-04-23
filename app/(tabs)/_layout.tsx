import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#4F46E5",
        tabBarInactiveTintColor: "#6B7280",
        tabBarStyle: {
          position: "absolute",
          elevation: 0,
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          height: 90,
          paddingTop: 10,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <Ionicons name="home-outline" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          tabBarLabel: "Explore",
          tabBarIcon: ({ color }) => (
            <Ionicons name="search-outline" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="membership"
        options={{
          tabBarLabel: "Membership",
          tabBarIcon: ({ color }) => (
            <Ionicons name="gift-outline" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="favourite"
        options={{
          tabBarLabel: "Favourite",
          tabBarIcon: ({ color }) => (
            <Ionicons name="heart-outline" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          tabBarLabel: "Account",
          tabBarIcon: ({ color }) => (
            <Ionicons name="person-circle-outline" size={28} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
