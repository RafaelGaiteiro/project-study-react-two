import { ReactNode } from "react";
import { MessageErrorStylized } from "./styles";

interface IMessageErrorProps {
  children: ReactNode;
}

export const MessageError = ({ children }: IMessageErrorProps) => {
  return <MessageErrorStylized>{children}</MessageErrorStylized>;
};
