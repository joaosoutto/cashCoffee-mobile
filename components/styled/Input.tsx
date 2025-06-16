import { TextInput } from "react-native";
import styled from "styled-components/native";
import { Colors } from "@/constants/Colors";

export const Input = styled(TextInput)`
  width: 100%;
  border-width: 1px;
  border-color: ${Colors.secondary.light};
  padding: 12px;
  border-radius: 10px;
  background-color: ${Colors.secondary.light};
  color: ${Colors.text.primary};
  font-size: 16px;
  font-family: "Poppins-Regular";
  font-weight: 400;
`;
