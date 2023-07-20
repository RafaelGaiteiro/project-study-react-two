import { styled } from "styled-components";

export const MessageSuccessStylized = styled.div`
  color: white;
  font-size: 14px;
  font-weight: 500;
  background-color: #0d8100;
  padding: 4px 8px;
  border-radius: 4px;
  user-select: none;

  @keyframes animationMessageError {
    0%,
    100% {
      transform: translate3d(0, 0, 0);
    }
    10%,
    30%,
    50%,
    70%,
    90% {
      transform: translate3d(-2px, 0, 0);
    }
    20%,
    40%,
    60%,
    80% {
      transform: translate3d(2px, 0, 0);
    }
  }
  animation: animationMessageError 0.6s ease-in-out;
`;
