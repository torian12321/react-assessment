import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
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
  max-width: 480px;  
  padding: 20px 16px;
  background: white;
  border: 1px solid red;
  border-radius: 8px;
  text-align: left;
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
