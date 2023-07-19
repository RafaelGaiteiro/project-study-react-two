import { styled } from "styled-components";

export const DefaultTemplateStylized = styled.div`
  display: grid;
  grid-template-areas:
    "HD HD"
    "AS CT";
  grid-template-columns: 200px auto;
  grid-template-rows: 100px auto;
`;

export const Content = styled.div`
  grid-area: CT;
  height: calc(100vh - 100px);

  display: flex;
  justify-content: center;
`;
