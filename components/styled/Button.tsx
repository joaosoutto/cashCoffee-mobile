import { Colors } from "@/constants/Colors";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const PrimaryButton = styled(TouchableOpacity)`
  background-color: ${({ disabled }) =>
    disabled ? Colors.text.tertiary : Colors.primary.dark};
  padding: 12px;
  border-radius: 10px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${Colors.text.primary};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;