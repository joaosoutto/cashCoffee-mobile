import { PrimaryButton } from "@/components/styled/Button";
import { FlexContainer } from "@/components/styled/Container";
import { Input } from "@/components/styled/Input";
import { Text } from "@/components/styled/Text";
import { Colors } from "@/constants/Colors";
import { Link, router } from "expo-router";
import { useState } from "react";
import { TouchableOpacity } from "react-native";

const LoginForm = () => {
  const [loginState, setLoginState] = useState({
    email: "",
    password: "",
  });

  console.log(loginState);
  return (
    <FlexContainer
      direction="column"
      align="flex-end"
      justify="flex-end"
      gap={18}
    >
      <Input
        placeholder="Email"
        keyboardType="email-address"
        value={loginState.email}
        onChangeText={(text: string) =>
          setLoginState({ ...loginState, email: text })
        }
      />

      <Input
        secureTextEntry={true}
        placeholder="Senha"
        value={loginState.password}
        onChangeText={(text: string) =>
          setLoginState({ ...loginState, password: text })
        }
      />
      <PrimaryButton
        disabled={loginState.email === "" || loginState.password === ""}
        onPress={() => {
          console.log("Entrar");
        }}
      >
        <Text size={16} color={Colors.text.onPrimary} bold>
          Entrar
        </Text>
      </PrimaryButton>
      <FlexContainer direction="row" align="center" justify="flex-end">
        <Text size={16} color={Colors.text.primary}>
          Ainda não tem uma conta? {""}
        </Text>
        <TouchableOpacity
          style={{
            margin: 0,
            padding: 0,
          }}
          onPress={() => router.push("/auth/register")}
        >
          <Text size={16} color={Colors.primary.dark} bold>
            Cadastre-se!
          </Text>
        </TouchableOpacity>
      </FlexContainer>
    </FlexContainer>
  );
};

export default LoginForm;
