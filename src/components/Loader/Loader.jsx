import styled, { keyframes } from 'styled-components';

const rotationAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Loader = styled.div`
  color: #3970a3;
  font-size: 40px;
  width: 1em;
  height: 1em;
  margin: 16px auto;

  border: 6px solid currentColor;
  border-top-color: transparent;
  border-radius: 50%;
  animation: ${rotationAnimation} .8s ease infinite;
`;
