import { AppContext } from "@/contexts/AppContext";
import { IUser } from "@/contexts/types";
import { LoginFormValues } from "@/hooks/auth/types";
import { axios } from "@/utils/AxiosInstance";
import { useMutation } from "@tanstack/react-query";
import { router } from "expo-router";
import { useContext } from "react";
import Toast from "react-native-toast-message";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useLogin = (values: LoginFormValues) => {
  const { setUser } = useContext(AppContext);

  return useMutation({
    mutationFn: async (values: LoginFormValues) =>
      axios({
        method: "get",
        url: `/users/${values.email}`,
      }),
    onSuccess: async (data: IUser) => {
      if (data.password !== values.password) {
        Toast.show({
          type: "error",
          text1: "Falha ao logar usuário",
          text2: "Usuário ou senha inválidos",
        });
      } else {
        // generate a random token
        const token = Math.random().toString(36).substring(2, 15);
        await AsyncStorage.setItem("token", token);

        setUser(data);
        router.push("/(logged)/(tabs)/dashboard");
      }
    },
    onError: () => {
      Toast.show({
        type: "error",
        text1: "Falha ao logar usuário",
        text2: "Usuário não encontrado",
        position: "top",
        visibilityTime: 4000,
      });
    },
  });
};
