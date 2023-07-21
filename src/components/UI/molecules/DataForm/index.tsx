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
    // Não realiza o comportamento padrão da página
    e.preventDefault();

    // Criamos uma let pois seu ciclo de vida é apenas aqui
    let newAlerts = [];

    if (name === "") {
      newAlerts.push("Por favor, digite o seu nome.");
    }
    if (surname === "") {
      newAlerts.push("Por favor, digite o seu sobrenome.");
    }
    if (phone === "") {
      newAlerts.push("Por favor, digite o seu telefone.");
    }

    // Verificamos se a quantidade de mensagens é maior que 0
    if (newAlerts.length > 0) {
      setAlerts(newAlerts);
    } else {
      onSubmit({ name, surname, phone });
      setName("");
      setSurname("");
      setPhone("");
      setAlerts([]); // Limpa os alertas após a submissão bem sucedida.
    }
  }

  return (
    <Container>
      <Box>
        <Text>Formulário</Text>
        <Form onSubmit={handleForm}>
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
