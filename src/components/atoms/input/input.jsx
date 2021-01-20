import React from 'react';

import { StyledInput, StyledLabel } from './input-styles';

const Input = ({ type = 'text', placeholder, radius = true, label }) => {
  return (
    <StyledInput placeholder={placeholder} radius={radius}>
      {label && <StyledLabel>{label}</StyledLabel>}
      <input type={type} />
    </StyledInput>
  );
};

export default Input;
