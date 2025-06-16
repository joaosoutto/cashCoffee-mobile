import _axios, { AxiosRequestConfig } from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { getBaseUrl } from "./apiUtils";

export const logout = async () => {
  await AsyncStorage.removeItem("token");
  router.replace("/auth/login");
};

function createAxiosInstance() {
  const instance = _axios.create({
    baseURL: getBaseUrl(),
  });

  instance.defaults.headers.post["Content-Type"] = "application/json";
  instance.defaults.headers.get["Content-Type"] = "application/json";

  return instance;
}

const axiosInstance = createAxiosInstance();

export const axios = <T>(config: AxiosRequestConfig): Promise<T> =>
  axiosInstance(config)
    .then((response: any) => response?.data)
    .catch((error: any) => {
      throw error;
    });

export default axiosInstance;
