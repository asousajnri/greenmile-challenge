import React from 'react';

import { StyledInput } from './input-styles';

const Input = ({ name, type = 'text', label }) => {
  return (
    <StyledInput>
      <label>{label}</label>
      <input type={type} name={name} />
    </StyledInput>
  );
};

export default Input;
