import { Container } from "../ui/Container";
import LogoBanner from "../Branded/LogoBanner";
import { Text } from "../ui/Text";
import { KeyboardAvoidingView, View } from "react-native";
import { Colors } from "@/constants/Colors";
import RegisterForm from "./Forms/RegisterForm";

const RegisterScreen = () => {
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
            Cadastre-se
          </Text>
          <Text size={16} color={Colors.secondary.base}>
            Bem vindo! Faça seu cadastro para continuar.
          </Text>
          <RegisterForm />
        </View>
      </Container>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;
