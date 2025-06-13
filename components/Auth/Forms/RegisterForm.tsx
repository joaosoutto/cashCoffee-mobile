import { PrimaryButton } from "@/components/styled/Button";
import { FlexContainer } from "@/components/styled/Container";
import { Input } from "@/components/styled/Input";
import { Text } from "@/components/styled/Text";
import { Colors } from "@/constants/Colors";
import { Link, router } from "expo-router";
import { useState } from "react";
import { TouchableOpacity } from "react-native";

const LoginForm = () => {
  const [registerState, setRegisterState] = useState({
    email: "",
    password: "",
    name: "",
  });

  return (
    <FlexContainer
      direction="column"
      align="flex-end"
      justify="flex-end"
      gap={18}
    >
      <Input
        placeholder="Nome"
        keyboardType="default"
        value={registerState.name}
        onChangeText={(text: string) =>
          setRegisterState({ ...registerState, name: text })
        }
      />
      <Input
        placeholder="Email"
        keyboardType="email-address"
        value={registerState.email}
        onChangeText={(text: string) =>
          setRegisterState({ ...registerState, email: text })
        }
      />

      <Input
        secureTextEntry={true}
        placeholder="Senha"
        value={registerState.password}
        onChangeText={(text: string) =>
          setRegisterState({ ...registerState, password: text })
        }
      />
      <PrimaryButton
        disabled={
          registerState.email === "" ||
          registerState.password === "" ||
          registerState.name === ""
        }
        onPress={() => {
          console.log("Cadastrar");
        }}
      >
        <Text size={16} color={Colors.text.onPrimary} bold>
          Cadastrar
        </Text>
      </PrimaryButton>
      <FlexContainer direction="row" align="center" justify="flex-end">
        <Text size={16} color={Colors.text.primary}>
          Já tem uma conta? {""}
        </Text>
        <TouchableOpacity
          style={{
            margin: 0,
            padding: 0,
          }}
          onPress={() => router.push("/auth/login")}
        >
          <Text size={16} color={Colors.primary.dark} bold>
            Faça login!
          </Text>
        </TouchableOpacity>
      </FlexContainer>
    </FlexContainer>
  );
};

export default LoginForm;
