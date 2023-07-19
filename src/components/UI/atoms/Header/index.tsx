import { HeaderStylized, Link, LinkGroup } from "./styles";

interface IHeaderProps {}

export const Header = ({}: IHeaderProps) => {
  return (
    <HeaderStylized>
      <h1>Projeto de Estudos com React</h1>

      <LinkGroup>
        <Link>Formulário</Link>
        <Link>Formulário</Link>
        <Link>Formulário</Link>
        <Link>Formulário</Link>
        <Link>Formulário</Link>
      </LinkGroup>
    </HeaderStylized>
  );
};
