import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Title = styled.div`
  color: black;
  margin-bottom: 12px;
  font-size: 16px;
  font-weight: bold;
  border-bottom: 1px solid #aaa;
`;

export const ModalTitle = ({ title }) => (title ? (
  <Title>
    {title}
  </Title>
) : null);

ModalTitle.propTypes = {
  title: PropTypes.string,
};
ModalTitle.defaultProps = {
  title: '',
};
