import { ReactNode } from "react";
import { ContainerStylized } from "./styles";

export interface IContainerProps {
  children: ReactNode;
  width?: string;
  gap?: string;
  justify?:
    | "start"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
}

export const Container = ({ children, ...props }: IContainerProps) => {
  return <ContainerStylized {...props}>{children}</ContainerStylized>;
};
