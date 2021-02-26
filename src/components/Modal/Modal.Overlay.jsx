import styled, { keyframes } from 'styled-components';

const fadeInAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 0.4;
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: black;
  opacity: 0.8;
  animation: ${fadeInAnimation} 0.5s ease-in 1;
`;
