import { styled } from "styled-components";
import { IContainerProps } from ".";

export const ContainerStylized = styled.div<IContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: ${(props) => props.width};
  gap: ${({ gap }) => gap};
`;
