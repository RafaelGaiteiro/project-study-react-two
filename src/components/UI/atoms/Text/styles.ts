import { styled } from "styled-components";
import { ITextProps } from ".";

export const TextStylized = styled.h1<ITextProps>`
  user-select: none;
  font-size: ${(props) => props.fontSize};
`;
