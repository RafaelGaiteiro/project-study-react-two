import { styled } from "styled-components";

export const ChatContainer = styled.div`
  background-color: #0e8388;
  border-radius: 50px 50px 16px 16px;
  height: 90%;
  width: 80%;
  display: flex;
  flex-direction: column;
`;

export const HeaderConversation = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  column-gap: 20px;

  background-color: #cbe4de;
  border-radius: 16px 16px 0 0;
  height: 100px;
  width: 100%;
  padding: 20px;
`;

export const ProfilePicture = styled.img`
  border-radius: 100%;
  width: 80px;
`;

export const UserContainer = styled.div`
  h1 {
    font-size: 22px;
  }

  h2 {
    font-size: 18px;
  }
`;

export const Conversation = styled.div`
  display: grid;
  grid-template-areas:
    "L R"
    "W W";
  grid-template-rows: 1fr 60px;
  grid-row-gap: 8px;
  grid-column-gap: 30%;
  height: 100%;
`;

export const MessageContainerLeft = styled.div`
  grid-area: L;
  background-color: #cbe4de;
  padding: 10px;
  border-radius: 0px 16px 16px 16px;
  margin: 8px;
  height: min-content;
`;

export const MessageContainerRight = styled.div`
  grid-area: R;
  background-color: #cbe4de;
  padding: 10px;
  border-radius: 16px 0px 16px 16px;
  margin: 8px;
  height: min-content;
`;

export const MessageText = styled.div``;

export const MessageTime = styled.div``;

export const LikeMessage = styled.div``;

export const WriteMessageContainer = styled.div`
  grid-area: W;

  display: flex;
  justify-content: start;
  align-content: center;
  flex-direction: row;
  column-gap: 4px;

  padding: 8px;
  background-color: #2c3333;
  height: 60px;
  border-radius: 0 0 16px 16px;
`;

export const InputMessage = styled.input`
  padding: 14px;
  border-radius: 8px;
  width: 100%;
`;

export const SelectMessage = styled.select`
  border-radius: 8px;
`;

export const ButtonSend = styled.button`
  padding: 14px;
  border-radius: 8px;
`;
