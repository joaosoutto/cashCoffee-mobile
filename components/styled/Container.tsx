import styled from "styled-components/native";
import { ContainerProps, FlexContainerProps } from "./types";
import { Colors } from "@/constants/Colors";

export const Container = styled.View<ContainerProps>`
  flex: 1;
  padding-top: ${(props) => props.paddingTop || 20}px;
  padding-bottom: ${(props) => props.paddingBottom || 20}px;
  padding-left: ${(props) => props.paddingLeft || 24}px;
  padding-right: ${(props) => props.paddingRight || 24}px;
  background-color: ${Colors.background.dark};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: ${(props) => props.gap || 42};
`;

export const FlexContainer = styled.View<FlexContainerProps>`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  align-items: ${(props) => props.align || "center"};
  justify-content: ${(props) => props.justify || "space-between"};
  gap: ${(props) => props.gap || 0};
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "auto"};
  margin-top: ${(props) => props.marginTop || 0};
  margin-bottom: ${(props) => props.marginBottom || 0};
  margin-left: ${(props) => props.marginLeft || 0};
  margin-right: ${(props) => props.marginRight || 0};
  background-color: ${(props) => props.backgroundColor || "transparent"};
`;
