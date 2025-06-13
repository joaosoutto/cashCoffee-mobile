import { Text as RNText } from "react-native";
import styled from "styled-components/native";

interface TextProps {
  bold?: boolean;
  size?: number;
  color?: string;
  family?: string;
}

export const Text = styled(RNText)<TextProps>`
  font-family: ${(props) => props.family || "Poppins-Bold"};
  font-size: ${(props) => props.size || 16}px;
  color: ${(props) => props.color || "#1f1f1f"};
  font-weight: ${(props) => (props.bold ? "bold" : "normal")};
`;
