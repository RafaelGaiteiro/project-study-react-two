import { ReactNode } from "react";
import { BoxStylized } from "./styles";

export interface IBoxProps {
  children: ReactNode;
  justify?:
    | "start"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
}

export const Box = ({ children, ...props }: IBoxProps) => {
  return <BoxStylized {...props}>{children}</BoxStylized>;
};
