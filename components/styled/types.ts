export interface FlexContainerProps {
  direction?: "row" | "column";
  align?: "flex-start" | "flex-end" | "center" | "stretch";
  justify?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around";
  gap?: number;
  width?: number | "100%";
  height?: number | "100%";
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  backgroundColor?: string;
}

export interface ContainerProps {
  paddingTop?: number;
  paddingBottom?: number;
  paddingLeft?: number;
  paddingRight?: number;
  backgroundColor?: string;
  gap?: number;
}
