import { ReactNode } from "react";
import { ContainerStylized } from "./styles";

export interface IContainerProps {
  children: ReactNode;
  width?: string;
  gap?: string;
}

export const Container = ({ children, width, ...props }: IContainerProps) => {
  return <ContainerStylized {...props}>{children}</ContainerStylized>;
};
