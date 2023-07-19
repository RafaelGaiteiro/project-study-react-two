import { ReactNode } from "react";
import { AlertStylized } from "./styles";

interface IAlertProps {
  children: ReactNode;
}

export const Alert = ({ children }: IAlertProps) => {
  return <AlertStylized>{children}</AlertStylized>;
};
