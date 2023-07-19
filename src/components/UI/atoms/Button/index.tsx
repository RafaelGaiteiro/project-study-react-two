import { ReactNode } from "react";
import { ButtonStylized } from "./styles";

interface IButtonProps {
  children: ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
}

export const Button = ({ children, type }: IButtonProps) => {
  return <ButtonStylized type={type}>{children}</ButtonStylized>;
};
