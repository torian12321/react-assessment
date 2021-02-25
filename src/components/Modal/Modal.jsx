import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { ModalOverlay } from './Modal.Overlay';
import { ModalTitle } from './Modal.Title';
import { ModalOptions } from './Modal.Options';

const ModalWrapper = styled.div`
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);

  width: 80%;
  max-width: 600px;  
  padding: 20px 16px;
  background: white;
  border: 1px solid red;
  border-radius: 8px;
  z-index: 1001;
`;

export const Modal = ({ isVisible = false, children, title }) => {
  const { body: _dBody } = document;

  return (isVisible && children) ? ReactDOM.createPortal(
    <>
      <ModalOverlay />
      <ModalWrapper>
        <ModalTitle title={title} />
        {children}
      </ModalWrapper>
    </>,
    _dBody
  ) : null;
};

Modal.Options = ModalOptions;
