import { router } from "expo-router";
import Toast from "react-native-toast-message";
import { RegisterFormValues } from "../../../hooks/auth/types";
import { useMutation } from "@tanstack/react-query";
import { axios } from "@/utils/AxiosInstance";

export const useRegister = (values: RegisterFormValues) => {
  return useMutation({
    mutationFn: (values: RegisterFormValues) =>
      axios({
        method: "post",
        url: `/users`,
        data: {
          ...values,
          id: values.email,
        },
      }),
    onSuccess: () => {
      Toast.show({
        type: "success",
        text1: "Usuário cadastrado com sucesso!",
        text2: "Você será redirecionado para a tela de login.",
        position: "top",
        visibilityTime: 4000,
      });
      router.push("/auth/login");
    },
    onError: (error) => {
      Toast.show({
        type: "error",
        text1: "Falha ao cadastrar usuário",
        text2:
          error instanceof Error ? error.message : "Por favor, tente novamente",
        position: "top",
        visibilityTime: 4000,
      });
    },
  });
};
