import { styled } from "styled-components";
import { IContainerProps } from ".";

export const ContainerStylized = styled.div<IContainerProps>`
  display: flex;
  justify-content: ${(props) => (props.justify ? props.justify : "center")};
  align-items: center;
  flex-direction: column;
  width: ${(props) => props.width};
  gap: ${({ gap }) => gap};
  padding: 16px;
  height: 100%;
`;
