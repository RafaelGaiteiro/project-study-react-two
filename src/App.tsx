import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DefaultTemplate } from "./components/templates/DefaultTemplate";
import { GlobalStyle } from "./styles/GlobalStyle";
import { HomePage } from "./components/pages/HomePage";
import { FormPage } from "./components/pages/FormPage";
import { QuizPage } from "./components/pages/QuizPage";
import { ChatPage } from "./components/pages/ChatPage";

export const App = () => {
  return (
    <BrowserRouter>
      <DefaultTemplate>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/chat" element={<ChatPage />} />
        </Routes>
        <GlobalStyle />
      </DefaultTemplate>
    </BrowserRouter>
  );
};
