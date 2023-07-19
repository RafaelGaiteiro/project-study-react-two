import { ReactNode } from "react";
import { BoxStylized } from "./styles";

interface IBoxProps {
  children: ReactNode;
}

export const Box = ({ children }: IBoxProps) => {
  return <BoxStylized>{children}</BoxStylized>;
};
