import { styled } from "styled-components";
import { IContainerProps } from ".";

export const ContainerStylized = styled.div<IContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width};
  gap: ${({ gap }) => gap};
`;
