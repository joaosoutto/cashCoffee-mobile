import { PrimaryButton } from "@/components/ui/Button";
import { FlexContainer } from "@/components/ui/Container";
import { Input } from "@/components/ui/Input";
import { Text } from "@/components/ui/Text";
import { Colors } from "@/constants/Colors";
import useRegisterForm from "@/hooks/auth/useRegisterForm";
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
  } = useRegisterForm();

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
        value={values.name}
        onChangeText={handleChange("name")}
        onBlur={handleBlur("name")}
      />
      {touched.name && errors.name && (
        <Text size={14} color={Colors.status.error}>
          {errors.name}
        </Text>
      )}
      <Input
        placeholder="Email"
        keyboardType="email-address"
        value={values.email}
        onChangeText={handleChange("email")}
        onBlur={handleBlur("email")}
      />
      {touched.email && errors.email && (
        <Text size={14} color={Colors.status.error}>
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
        <Text size={14} color={Colors.status.error}>
          {errors.password}
        </Text>
      )}
      <PrimaryButton disabled={!isValid} onPress={() => handleSubmit()}>
        <Text size={16} color={Colors.text.onPrimary} bold>
          Cadastrar
        </Text>
      </PrimaryButton>
      <FlexContainer direction="row" align="center" justify="flex-end">
        <Text size={16} color={Colors.secondary.base}>
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
