import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DefaultTemplate } from "./components/templates/DefaultTemplate";
import { GlobalStyles } from "./styles/GlobalStyles";
import { HomePage } from "./components/pages/HomePage";
import { FormPage } from "./components/pages/FormPage";
import { QuizPage } from "./components/pages/QuizPage";
import { ErrorPage } from "./components/pages/ErrorPage";

export const App = () => {
  return (
    <BrowserRouter>
      <DefaultTemplate>
        <Routes>
          <Route path="/" element={<HomePage />} errorElement={<ErrorPage />} />
          <Route
            path="/form"
            element={<FormPage />}
            errorElement={<ErrorPage />}
          />
          <Route
            path="/quiz"
            element={<QuizPage />}
            errorElement={<ErrorPage />}
          />
        </Routes>
        <GlobalStyles />
      </DefaultTemplate>
    </BrowserRouter>
  );
};
