import { styled } from "styled-components";

export const ButtonStylized = styled.button`
  border-radius: 4px;
  padding: 8px;
  box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.1);
  font-size: 16px;
  font-weight: 600;
  color: #e2e2e2;
  background-color: #2b5fb3;
  transition: all 0.4s;
  user-select: none;

  &&:hover {
    background-color: #1a61b5;
    transform: scale(1.008, 1.018);
    font-weight: 700;
    color: white;
  }

  &&:active {
    background-color: #123963;
    font-weight: 800;
    color: white;
  }
`;
