import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Button.styled';

export const Button = ({
  children,
  label,
  onClick,
  disabled,
  outline,
  type,
}) => {
  const content = children || label;
  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  return content ? (
    <Wrapper outline={outline} onClick={handleClick} type={type}>
      {content}
    </Wrapper>
  ) : null;
};

Button.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  outline: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
};
Button.defaultProps = {
  children: null,
  label: '',
  disabled: false,
  outline: false,
  type: 'button',
};
