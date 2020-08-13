import React from "react";

import { StyledButton } from "./button-styles";

const Button = ({ type, onClick, children }) => {
  return (
    <StyledButton type={type} onClick={onClick}>
      <span>{children}</span>
    </StyledButton>
  );
};

export default Button;
