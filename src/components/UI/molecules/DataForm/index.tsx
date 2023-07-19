import { Button } from "../../atoms/Button";
import { Container } from "../../atoms/Container";
import { Form } from "../../atoms/Form";
import { Input } from "../../atoms/Input";
import { Label } from "../../atoms/Label";
import { Text } from "../../atoms/Title";

export const DataForm = () => {
  return (
    <Container>
      <Form>
        <Text>Formulário</Text>
        <Label htmlFor="name">Nome</Label>
        <Input id="name" placeholder="Digite o seu nome" />

        <Label htmlFor="surname">Sobrenome</Label>
        <Input id="surname" placeholder="Digite o seu sobrenome" />

        <Label htmlFor="phone">Telefone</Label>
        <Input id="phone" placeholder="Digite o seu telefone" />

        <Button>Enviar</Button>
      </Form>
    </Container>
  );
};
