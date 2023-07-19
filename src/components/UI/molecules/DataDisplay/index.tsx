import { Box } from "../../atoms/Box";
import { Container } from "../../atoms/Container";
import { Text } from "../../atoms/Text";
import { IForm } from "../../organisms/ParentForm"; // Interface sendo importada

export const DataDisplay = ({ name, surname, phone }: IForm) => {
  return (
    <Container>
      <Box>
        <Text>Display</Text>
        <Text fontSize="17px">Nome: {name}</Text>
        <Text fontSize="17px">Sobrenome: {surname}</Text>
        <Text fontSize="17px">Telefone: {phone}</Text>
      </Box>
    </Container>
  );
};
