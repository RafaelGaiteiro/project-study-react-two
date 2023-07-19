import { useState } from "react";
import { Button } from "../../atoms/Button";
import { Container } from "../../atoms/Container";
import { Form } from "../../atoms/Form";
import { Input } from "../../atoms/Input";
import { Label } from "../../atoms/Label";
import { Text } from "../../atoms/Title";
import { IForm } from "../../organisms/ParentForm"; // Interface sendo importada

type DataFormProps = {
  onSubmit: (data: IForm) => void;
};

export const DataForm = ({ onSubmit }: DataFormProps) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");

  function handleForm(e: React.FormEvent) {
    e.preventDefault();
    onSubmit({ name, surname, phone });
    // Limpa os campos
    setName("");
    setSurname("");
    setPhone("");
  }

  return (
    <Container>
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
        <Button type="submit">Enviar</Button>
      </Form>
    </Container>
  );
};
