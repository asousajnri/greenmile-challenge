import React from 'react';

import { StyledInput } from './input-styles';

const Input = ({
  inputRef,
  name,
  type = 'text',
  label,
}) => {
  return (
    <StyledInput>
      <label>{label}</label>
      <input ref={inputRef} type={type} name={name} />
    </StyledInput>
  );
};

export default Input;
