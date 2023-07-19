import { useState } from "react";
import { Button } from "../../atoms/Button";
import { Container } from "../../atoms/Container";
import { Form } from "../../atoms/Form";
import { Input } from "../../atoms/Input";
import { Label } from "../../atoms/Label";
import { Text } from "../../atoms/Text";
import { IForm } from "../../organisms/ParentForm"; // Interface sendo importada
import { Alert } from "../../atoms/Alert";
import { v4 as uuidv4 } from "uuid";
import { Box } from "../../atoms/Box";

type DataFormProps = {
  onSubmit: (data: IForm) => void;
};

export const DataForm = ({ onSubmit }: DataFormProps) => {
  const [name, setName] = useState<string>("");
  const [surname, setSurname] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [alerts, setAlerts] = useState<string[]>([]);

  function handleForm(e: React.FormEvent) {
    e.preventDefault();
    // Valida se os campos não são nulos
    if (name === "") {
      // Exibe mensagem
      setAlerts((prevAlerts) => [
        // Precisamos do ...prevAlerts para que o último alerta adicionado não elimine os demais
        ...prevAlerts,
        "Por favor, digite o seu nome.",
      ]);
    }
    if (surname === "") {
      setAlerts((prevAlerts) => [
        ...prevAlerts,
        "Por favor, digite o seu sobrenome.",
      ]);
    }
    if (phone === "") {
      setAlerts((prevAlerts) => [
        ...prevAlerts,
        "Por favor, digite o seu telefone.",
      ]);
    } else {
      // Manda os dados para o componente pai que passa para o display
      onSubmit({ name, surname, phone });
      // Limpa os campos
      setName("");
      setSurname("");
      setPhone("");
    }
  }

  return (
    <Container>
      <Box>
        <Form onSubmit={handleForm}>
          <Text>Formulário</Text>
          <Label htmlFor="name">Nome</Label>
          <Input
            id="name"
            placeholder="Digite o seu nome"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <Label htmlFor="surname">Sobrenome</Label>
          <Input
            id="surname"
            placeholder="Digite o seu sobrenome"
            onChange={(e) => setSurname(e.target.value)}
            value={surname}
          />
          <Label htmlFor="phone">Telefone</Label>
          <Input
            id="phone"
            placeholder="Digite o seu telefone"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
          />
          <Alert>
            {alerts.map((alert) => (
              <p key={uuidv4()}>{alert}</p>
            ))}
          </Alert>
          <Button type="submit">Enviar</Button>
        </Form>
      </Box>
    </Container>
  );
};
