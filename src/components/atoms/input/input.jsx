import React from 'react';

import { StyledInput, StyledLabel } from './input-styles';

const Input = ({ 
  type = 'text', 
  placeholder, 
  borderRadius, 
  label,
  name,
}) => {
  return (
    <StyledInput placeholder={placeholder} borderRadius={borderRadius}>
      {label && <StyledLabel 
        aria-label="input-label" 
        htmlFor={name}
      >
        {label}
      </StyledLabel>}
      <input id={name} aria-label="input-text" type={type} />
    </StyledInput>
  );
};

export default Input;
