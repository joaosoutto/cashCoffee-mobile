import { PrimaryButton } from "@/components/styled/Button";
import { FlexContainer } from "@/components/styled/Container";
import { Input } from "@/components/styled/Input";
import { Text } from "@/components/styled/Text";
import { Colors } from "@/constants/Colors";
import useLoginForm from "@/hooks/auth/useLoginForm";
import { router } from "expo-router";
import { TouchableOpacity } from "react-native";

const LoginForm = () => {
  const {
    handleChange,
    handleBlur,
    touched,
    isValid,
    values,
    errors,
    handleSubmit,
  } = useLoginForm();

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
        value={values.email}
        onChangeText={handleChange("email")}
        onBlur={handleBlur("email")}
      />
      {touched.email && errors.email && (
        <Text size={12} color={Colors.status.error}>
          {errors.email}
        </Text>
      )}

      <Input
        secureTextEntry={true}
        placeholder="Senha"
        value={values.password}
        onChangeText={handleChange("password")}
        onBlur={handleBlur("password")}
      />
      {touched.password && errors.password && (
        <Text size={12} color={Colors.status.error}>
          {errors.password}
        </Text>
      )}
      <PrimaryButton disabled={!isValid} onPress={() => handleSubmit()}>
        <Text size={16} color={Colors.text.onPrimary} bold>
          Entrar
        </Text>
      </PrimaryButton>
      <FlexContainer direction="row" align="center" justify="flex-end">
        <Text size={16} color={Colors.secondary.base}>
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
