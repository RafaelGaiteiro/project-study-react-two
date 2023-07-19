import { ReactNode } from "react";
import { TextStylized } from "./styles";

export interface ITextProps {
  children: ReactNode;
  fontSize?: string;
}

export const Text = ({ children, ...props }: ITextProps) => {
  return <TextStylized {...props}>{children}</TextStylized>;
};
