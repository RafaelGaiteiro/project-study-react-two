import { styled } from "styled-components";

interface IContainerStylized {
  widthPersonalized?: string;
}

export const ContainerStylized = styled.div<IContainerStylized>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: ${(props) => props.widthPersonalized};
`;
