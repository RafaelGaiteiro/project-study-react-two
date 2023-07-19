import { HeaderStylized } from "./styles";

interface IHeaderProps {}

export const Header = ({}: IHeaderProps) => {
  return (
    <HeaderStylized>
      <h1>Projeto de Estudos com React</h1>
    </HeaderStylized>
  );
};
