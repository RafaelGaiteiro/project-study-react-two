import { ReactNode } from "react";
import { MessageSuccessStylized } from "./styles";

interface IMessageSuccessProps {
  children: ReactNode;
}

export const MessageSuccess = ({ children }: IMessageSuccessProps) => {
  return <MessageSuccessStylized>{children}</MessageSuccessStylized>;
};
