import FullLogo from "./FullLogo";
import { FlexContainer } from "../styled/Container";
import { Text } from "../styled/Text";
import { Colors } from "@/constants/Colors";

const LogoBanner = () => {
  return (
    <FlexContainer
      direction="row"
      align="center"
      justify="center"
      gap={14}
      width="100%"
      backgroundColor={Colors.secondary.base}
      style={{
        height: "40%",
        paddingLeft: 78,
        borderTopLeftRadius: 70,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderTopRightRadius: 10,
      }}
    >
      <FullLogo />
      <FlexContainer
        direction="column"
        align="flex-start"
        justify="flex-end"
        height={100}
      >
        <Text color={Colors.text.primary} size={34} bold>
          CashCoffee
        </Text>
        <Text color={Colors.text.primary} size={14} bold>
          apaixonados por cafeteria
        </Text>
      </FlexContainer>
    </FlexContainer>
  );
};

export default LogoBanner;
