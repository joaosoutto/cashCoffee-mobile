import { Container, FlexContainer, LoggedInContainer } from "../ui/Container";
import { Text } from "../ui/Text";
import { View } from "react-native";
import { Colors } from "@/constants/Colors";
import { AppContext } from "@/contexts/AppContext";
import { useContext } from "react";
import { PrimaryButton } from "../ui/Button";
import { logout } from "@/utils/AxiosInstance";
import { Image } from "expo-image";

const DashboardScreen = () => {
  const { user, setUser } = useContext(AppContext);

  console.log(user);

  return (
    <LoggedInContainer>
      <FlexContainer
        direction="column"
        align="center"
        justify="center"
        gap={12}
      >
        <Text size={32} bold color={Colors.primary.darker}>
          Olá, {user?.name}!
        </Text>
        <Text size={20} color={Colors.primary.dark} align="center">
          Bem vindo de volta! Pronto para mais uma xícara de café?
        </Text>

        <Image
          source={require("@/assets/images/coffee.png")}
          style={{ width: 300, height: 300, marginTop: 54 }}
          contentFit="contain"
        />
      </FlexContainer>

      <PrimaryButton
        onPress={() => {
          setUser(null);
          logout();
        }}
      >
        <Text size={16} color={Colors.text.onPrimary}>
          Sair
        </Text>
      </PrimaryButton>
    </LoggedInContainer>
  );
};

export default DashboardScreen;
