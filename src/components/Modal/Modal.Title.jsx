import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import iconWarning from './icons/icon-warning.png';

const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: black;
  margin-bottom: 12px;
  font-size: 16px;
  font-weight: bold;
  border-bottom: 1px solid #aaa;
`;
const Logo = styled.img`
  width: 16px;
  margin-right: 6px;
`;

export const ModalTitle = ({ title }) => (title ? (
  <Title>
    <Logo src={iconWarning} alt="warning" />
    {title}
  </Title>
) : null);

ModalTitle.propTypes = {
  title: PropTypes.string,
};
ModalTitle.defaultProps = {
  title: '',
};
