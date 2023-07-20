import { styled } from "styled-components";
import { IBoxProps } from ".";

export const BoxStylized = styled.div<IBoxProps>`
  display: flex;
  justify-content: ${(props) => (props.justify ? props.justify : "center")};
  align-items: center;
  flex-direction: column;
  width: 500px;
  padding: 18px;
  gap: 4px;

  border: solid 2px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;
