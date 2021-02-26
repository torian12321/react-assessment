import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Options = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  padding-top: 40px;
`;

export const ModalOptions = ({ children }) => (children ? (
  <Options>
    {children}
  </Options>
) : null);

ModalOptions.propTypes = {
  children: PropTypes.node,
};
ModalOptions.defaultProps = {
  children: null,
};
