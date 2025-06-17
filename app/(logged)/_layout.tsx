import { Colors } from "@/constants/Colors";
import { AppContext } from "@/contexts/AppContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router, Stack } from "expo-router";
import React, { useContext, useEffect } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function AuthLayout() {
  const insets = useSafeAreaInsets();
  const { setUser, user } = useContext(AppContext);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = await AsyncStorage.getItem("token");

        if (!token || !user) {
          // No token or user data found, redirect to login
          router.replace("/auth/login");
          return;
        }

        // Token exists, set user data in context
        setUser(user);
      } catch (error) {
        console.error("Error checking auth:", error);
        router.replace("/auth/login");
      }
    };

    checkAuth();
  }, [setUser, user,]);

  return (
    <>
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: {
            paddingTop: insets.top,
            backgroundColor: Colors.background.medium,
          },
        }}
      >
        <Stack.Screen name="dashboard" options={{ headerShown: false }} />
      </Stack>
    </>
  );
}
