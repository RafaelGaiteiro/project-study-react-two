import {
  ButtonSend,
  ChatContainer,
  Conversation,
  HeaderConversation,
  InputMessage,
  LikeMessage,
  MessageContainerLeft,
  MessageContainerRight,
  MessageText,
  MessageTime,
  ProfilePicture,
  SelectMessage,
  UserContainer,
  WriteMessageContainer,
} from "./styles";
import perfil from "./../../../../assets/imgs/rafa_perfil.jpg";
import { Container } from "../../atoms/Container";

export const Chat = () => {
  return (
    <Container>
      <ChatContainer>
        <HeaderConversation>
          <ProfilePicture src={perfil} />
          <UserContainer>
            <h1>Rafael Krämer da Silva</h1>
            <h2>Desenvolvedor na M8 Sistemas</h2>
          </UserContainer>
        </HeaderConversation>
        <Conversation>
          <MessageContainerLeft>
            <MessageText>
              Estou tentando fazer a DIV pai ser preenchida por todas as DIVS
              filhas, porém já tentei várias coisas e não funciona. Acaba
              sempre.
            </MessageText>
            <MessageTime></MessageTime>
            <LikeMessage></LikeMessage>
          </MessageContainerLeft>
          <MessageContainerRight>
            <MessageText>
              Estou tentando fazer a DIV pai ser preenchida por todas as DIVS
              filhas, porém já tentei várias coisas e não funciona. Acaba
              sempre.
            </MessageText>
            <MessageTime></MessageTime>
            <LikeMessage></LikeMessage>
          </MessageContainerRight>
          <WriteMessageContainer>
            <InputMessage placeholder="Digite uma mensagem" />
            <SelectMessage>
              <option>Usuário 1</option>
              <option>Usuário 2</option>
            </SelectMessage>
            <ButtonSend>Enviar</ButtonSend>
          </WriteMessageContainer>
        </Conversation>
      </ChatContainer>
    </Container>
  );
};
