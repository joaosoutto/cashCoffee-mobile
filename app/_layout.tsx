import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import Toast from "react-native-toast-message";

import { useColorScheme } from "@/hooks/useColorScheme";
import { Platform } from "react-native";
import { AppProvider } from "@/contexts/AppContext";
import ReactQueryProvider from "@/contexts/ReactQueryProvider";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <AppProvider>
      <ReactQueryProvider queryClientOptions={{}}>
        <ThemeProvider
          value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
        >
          <Stack
            screenOptions={{
              headerShown: false,
              statusBarStyle: Platform.OS === "ios" ? undefined : "dark",
              contentStyle: {
                backgroundColor: "#fff",
              },
            }}
          >
            <Stack.Screen name={"index"} options={{ headerShown: false }} />
          </Stack>
          <StatusBar style="auto" />
          <Toast />
        </ThemeProvider>
      </ReactQueryProvider>
    </AppProvider>
  );
}
