import React from 'react';
import * as ButtonIcons from 'react-icons/fi';

import { StyledButton } from './button-styles';

const Button = ({
  label = 'Button',
  primary,
  secondary,
  noRadius,
  disabled,
  isLoading,
  bold,
  icon,
  onClick,
}) => {
  const ButtonIcon = icon ? ButtonIcons[icon || 'FiAlertCircle'] : null;

  return (
    <StyledButton
      disabled={disabled}
      primary={primary}
      secondary={secondary}
      noRadius={noRadius}
      isLoading={isLoading}
      bold={bold}
      onClick={onClick}
    >
      {ButtonIcon && (
        <ButtonIcon aria-label="button-icon" className="button-icon" />
      )}
      <span aria-label="button-text">
        {isLoading ? 'Carregando...' : label}
      </span>
    </StyledButton>
  );
};

export default Button;
