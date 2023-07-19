import { ReactNode } from "react";
import { Background, Content, DefaultTemplateStylized } from "./styles";
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
      <Background>
        <Content>{children}</Content>
      </Background>
    </DefaultTemplateStylized>
  );
};
