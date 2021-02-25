import React from 'react';
import styled from 'styled-components';

const Options = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 40px;
`;

export const ModalOptions = ({ children }) => (children ? (
  <Options>
    {children}
  </Options>
) : null);
