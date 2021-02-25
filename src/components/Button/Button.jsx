import React from 'react';
import Wrapper from './Button.styled';

export const Button = ({
  children,
  label,
  onClick,
  disabled,
  outline,
  type = 'button',
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
