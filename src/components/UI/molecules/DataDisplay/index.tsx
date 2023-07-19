import { Box } from "../../atoms/Box";
import { Container } from "../../atoms/Container";
import { Text } from "../../atoms/Title";
import { IForm } from "../../organisms/ParentForm"; // Interface sendo importada

export const DataDisplay = ({ name, surname, phone }: IForm) => {
  return (
    <Container>
      <Box>
        <Text>Display</Text>
        <Text>{name}</Text>
        <Text>{surname}</Text>
        <Text>{phone}</Text>
      </Box>
    </Container>
  );
};
