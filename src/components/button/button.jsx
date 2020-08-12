import React from "react";

import { StyledButton } from "./button-styles";

const Button = ({ type, onClick, children }) => {
  return (
    <StyledButton type={type} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
