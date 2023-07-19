import { ParentForm } from "./components/UI/organisms/ParentForm";
import { DefaultTemplate } from "./components/templates/DefaultTemplate";
import { GlobalStyles } from "./styles/GlobalStyles";

export const App = () => {
  return (
    <DefaultTemplate>
      <ParentForm />
      <GlobalStyles />
    </DefaultTemplate>
  );
};
