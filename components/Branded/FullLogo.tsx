import { Image } from "expo-image";

const FullLogo = () => {
  return (
    <Image
      source={require("@/assets/images/logo.jpeg")}
      style={{ width: 100, height: 100 }}
    />
  );
};

export default FullLogo;
