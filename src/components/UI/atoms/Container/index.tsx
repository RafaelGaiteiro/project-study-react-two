import { ReactNode } from "react";
import { ContainerStylized } from "./styles";

interface IContainerProps {
  children: ReactNode;
  width?: string;
}

export const Container = ({ children, width }: IContainerProps) => {
  return <ContainerStylized widthPersonalized={width}>{children}</ContainerStylized>;
};
