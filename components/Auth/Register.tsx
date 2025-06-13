import { Container, FlexContainer } from "../styled/Container";
import LogoBanner from "../Branded/LogoBanner";
import { Text } from "../styled/Text";
import {
  Button,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Colors } from "@/constants/Colors";
import { Input } from "../styled/Input";
import { PrimaryButton } from "../styled/Button";
import LoginForm from "./Forms/LoginForm";
import { useState } from "react";
import RegisterForm from "./Forms/RegisterForm";

const RegisterScreen = () => {
  return (
    <KeyboardAvoidingView
      behavior="padding"
      style={{ flex: 1, backgroundColor: Colors.background.light }}
    >
      <Container>
        <LogoBanner />
        <View
          style={{
            width: "100%",
            gap: 12,
          }}
        >
          <Text size={24} bold color={Colors.text.primary}>
            Cadastre-se
          </Text>
          <Text size={16} color={Colors.text.primary}>
            Bem vindo! Faça seu cadastro para continuar.
          </Text>
          <RegisterForm />
        </View>
      </Container>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;
