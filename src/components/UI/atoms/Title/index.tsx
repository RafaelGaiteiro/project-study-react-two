import { ReactNode } from "react";
import { TextStylized } from "./styles";

interface ITextProps {
  children: ReactNode;
}

export const Text = ({ children }: ITextProps) => {
  return <TextStylized>{children}</TextStylized>;
};
