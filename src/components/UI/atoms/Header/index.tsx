import { HeaderStylized, Link, LinkGroup } from "./styles";
import { useNavigate } from "react-router-dom";

interface IHeaderProps {}

export const Header = ({}: IHeaderProps) => {
  const navigate = useNavigate();

  return (
    <HeaderStylized>
      <h1>Projeto de Estudos com React</h1>

      <LinkGroup>
        <Link onClick={() => navigate("/")}>Home</Link>
        <Link onClick={() => navigate("/form")}>Form</Link>
        <Link onClick={() => navigate("/quiz")}>Quiz</Link>
      </LinkGroup>
    </HeaderStylized>
  );
};
