import { ReactNode } from "react";
import { ButtonStylized } from "./styles";

interface IButtonProps {
  children: ReactNode;
}

export const Button = ({ children }: IButtonProps) => {
  return <ButtonStylized>{children}</ButtonStylized>;
};
