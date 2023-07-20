import { styled } from "styled-components";

export const DefaultTemplateStylized = styled.div`
  display: grid;
  grid-template-areas:
    "HD HD"
    "AS CT";
  grid-template-columns: 200px auto;
  grid-template-rows: 100px auto;
  height: 100%;
`;

export const Content = styled.div`
  grid-area: CT;
  height: calc(100% - 100px);
  width: calc(100% - 200px);
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Background = styled.div`
  background-color: rgb(247, 249, 251);
  border-radius: 32px 0 0 0;
`;
