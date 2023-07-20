import { styled } from "styled-components";

export const HeaderStylized = styled.div`
  grid-area: HD;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 8px;

  background-color: #e2e2e2;
  height: 100%;
  width: 100%;
`;

export const LinkGroup = styled.div`
  display: flex;
  gap: 16px;
`;

export const Link = styled.p`
  cursor: pointer;
  padding: 4px;
  border-radius: 2px;
  background-color: transparent;
  transition: 0.2s;
  user-select: none;

  &&:hover {
    background-color: rgba(113, 121, 118, 0.3);
  }

  &&:active {
    color: white;
    background-color: rgba(113, 121, 118, 0.9);
  }
`;
