import React from 'react';

import { StyledInput, StyledLabel } from './input-styles';

const Input = ({ type = 'text', placeholder, radius, label }) => {
  return (
    <StyledInput placeholder={placeholder} radius={radius}>
      {/* {label && <StyledLabel>{label}</StyledLabel>} */}
      <input aria-label="input-text" type={type} />
    </StyledInput>
  );
};

export default Input;
