import { ReactNode } from "react";
import { LabelStylized } from "./styles";

interface ILabelProps {
  htmlFor: string;
  children: ReactNode;
}

export const Label = ({ htmlFor, children }: ILabelProps) => {
  return <LabelStylized htmlFor={htmlFor}>{children}</LabelStylized>;
};
