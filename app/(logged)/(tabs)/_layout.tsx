import { router, Tabs } from "expo-router";
import React, { useContext, useEffect } from "react";
import { Platform } from "react-native";

import { IconSymbol } from "@/components/ui/IconSymbol";
import { Colors } from "@/constants/Colors";
import { AppContext } from "@/contexts/AppContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function TabLayout() {
  const token = AsyncStorage.getItem("token");

  const { user } = useContext(AppContext);

  const checkToken = async () => {
    const token = await AsyncStorage.getItem("token");
    return token;
  };

  useEffect(() => {
    const token = checkToken();
    if (!token || !user) {
      router.replace("/auth/login");
    }
  }, [token, user]);

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.primary.base,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: "absolute",
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="dashboard"
        options={{
          title: "Dashboard",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="house.fill" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
