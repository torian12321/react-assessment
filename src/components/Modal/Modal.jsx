import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { ModalOverlay } from './Modal.Overlay';
import { ModalTitle } from './Modal.Title';
import { ModalOptions } from './Modal.Options';

const upAnimation = keyframes`
  from {
    opacity: 0;
    margin-top: 16px;
  }
  to {
    opacity: 1;
    margin-top: 0;
  }
`;
const ModalWrapper = styled.div`
  z-index: 1000;
`;
const ModalBody = styled.div`
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);

  width: 80%;
  max-width: 480px;  
  padding: 20px 16px;
  background: white;
  border: 1px solid red;
  border-radius: 8px;
  text-align: left;
  animation-fill-mode: forwards;
  animation-delay: .3s;
  animation: ${upAnimation} 0.5s ease-in 1;
`;

export const Modal = ({ isVisible = false, children, title }) => {
  const { body: _dBody } = document;

  return (isVisible && children) ? ReactDOM.createPortal(
    <ModalWrapper>
      <ModalOverlay />
      <ModalBody>
        <ModalTitle title={title} />
        {children}
      </ModalBody>
    </ModalWrapper>,
    _dBody
  ) : null;
};

Modal.Options = ModalOptions;

Modal.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  isVisible: PropTypes.bool,
};
Modal.defaultProps = {
  children: null,
  title: '',
  isVisible: false,
};
