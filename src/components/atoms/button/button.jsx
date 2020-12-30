import React from 'react';
import * as ButtonIcons from 'react-icons/fi';

import {
    StyledButton
} from './button-styles';

const Button = ({ 
    label = 'Button', 
    primary, 
    secondary,
    radius = true,
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
            radius={radius}
            isLoading={isLoading}
            bold={bold}
            onClick={onClick}
        >   {ButtonIcon && <ButtonIcon className="button-icon" />}
            {isLoading ? 'Carregando...' : label}
        </StyledButton>
    );
};

export default Button;