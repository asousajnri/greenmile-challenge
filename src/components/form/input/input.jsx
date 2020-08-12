import React from "react";

import { StyledInput } from "./input-styles";

const Input = ({ name, type = "text", value }) => {
  return <StyledInput type={type} name={name} value={value} />;
};

export default Input;
