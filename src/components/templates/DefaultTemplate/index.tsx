import { ReactNode } from "react";
import { Content, DefaultTemplateStylized } from "./styles";
import { Header } from "../../UI/atoms/Header";

interface IDefaultTemplate {
  children: ReactNode;
}

export const DefaultTemplate = ({ children }: IDefaultTemplate) => {
  return (
    <DefaultTemplateStylized>
      <Header />
      <Content>{children}</Content>
    </DefaultTemplateStylized>
  );
};
