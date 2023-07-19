import { ReactNode } from "react";
import { ContainerStylized } from "./styles";

interface IContainerProps {
  children: ReactNode;
}

export const Container = ({ children }: IContainerProps) => {
  return <ContainerStylized>{children}</ContainerStylized>;
};
