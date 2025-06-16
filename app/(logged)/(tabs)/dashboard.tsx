import { Text, View } from "react-native";

import { useContext } from "react";
import { AppContext } from "@/contexts/AppContext";
import { PrimaryButton } from "@/components/styled/Button";
import { logout } from "@/utils/AxiosInstance";

const Dashboard = () => {
  const { user, setUser } = useContext(AppContext);
  console.log(user);

  return (
    <View>
      <Text>Dashboard</Text>
      <Text>{user?.name}</Text>
      <PrimaryButton
        onPress={() => {
          setUser(null);
          logout();
        }}
      >
        <Text>Sair</Text>
      </PrimaryButton>
    </View>
  );
};

export default Dashboard;
