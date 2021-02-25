import React from 'react';
import styled from 'styled-components';

const Title = styled.div`
  color: black;
  margin-bottom: 12px;
  font-size: 16px;
  border-bottom: 1px solid #aaa;
`;

export const ModalTitle = ({ title }) => (title ? (
  <Title>
    {title}
  </Title>
) : null);
