import { useState } from "react";
import { Container } from "../../atoms/Container";
import { DataDisplay } from "../../molecules/DataDisplay";
import { DataForm } from "../../molecules/DataForm";

// Criação e exportação da interface
export interface IForm {
  name: string;
  surname: string;
  phone: string;
}

export const ParentForm = () => {
  // Criação de useState como objeto
  const [formData, setFormData] = useState<IForm>({
    name: "",
    surname: "",
    phone: "",
  });
  const [showDisplay, setShowDisplay] = useState<boolean>(false);

  // Lida com o formulário
  function handleFormSubmit(newData: IForm) {
    setFormData(newData);
    // Mostra o display
    setShowDisplay(true);
  }

  return (
    <Container gap="4px">
      <DataForm onSubmit={handleFormSubmit} />
      {/* Renderização condicional */}
      {showDisplay && <DataDisplay {...formData} />}
    </Container>
  );
};
