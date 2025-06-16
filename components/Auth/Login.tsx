import { Container } from "../styled/Container";
import LogoBanner from "../Branded/LogoBanner";
import { Text } from "../styled/Text";
import { KeyboardAvoidingView, View } from "react-native";
import { Colors } from "@/constants/Colors";
import LoginForm from "./Forms/LoginForm";

const LoginScreen = () => {
  return (
    <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
      <Container>
        <LogoBanner />
        <View
          style={{
            width: "100%",
            gap: 12,
          }}
        >
          <Text size={28} bold color={Colors.primary.dark}>
            Login
          </Text>
          <Text size={16} color={Colors.secondary.base}>
            Bem vindo de volta! Faça login para continuar.
          </Text>
          <LoginForm />
        </View>
      </Container>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
