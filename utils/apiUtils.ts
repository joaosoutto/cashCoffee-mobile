import { Platform } from "react-native";

export const getBaseUrl = () => {
  if (Platform.OS === "android") {
    return "http://10.0.2.2:3000";
  } else {
    return "http://localhost:3000";
  }
};
