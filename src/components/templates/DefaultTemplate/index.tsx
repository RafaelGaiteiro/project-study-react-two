import { ReactNode } from "react";
import { Content, DefaultTemplateStylized } from "./styles";
import { Header } from "../../UI/atoms/Header";
import { Aside } from "../../UI/atoms/Aside";

interface IDefaultTemplate {
  children: ReactNode;
}

export const DefaultTemplate = ({ children }: IDefaultTemplate) => {
  return (
    <DefaultTemplateStylized>
      <Header />
      <Aside />
      <Content>{children}</Content>
    </DefaultTemplateStylized>
  );
};
