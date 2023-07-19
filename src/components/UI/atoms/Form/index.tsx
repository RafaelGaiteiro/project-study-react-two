import { ReactNode } from "react";
import { FormStylized } from "./styles";

interface IFormProps {
  children: ReactNode;
  onSubmit?: React.FormEventHandler<HTMLFormElement> | undefined;
}

export const Form = ({ children, onSubmit }: IFormProps) => {
  return <FormStylized onSubmit={onSubmit}>{children}</FormStylized>;
};
