import { ReactNode } from "react";
import { FormStylized } from "./styles";

interface IFormProps {
  children: ReactNode;
}

export const Form = ({ children }: IFormProps) => {
  return <FormStylized>{children}</FormStylized>;
};
