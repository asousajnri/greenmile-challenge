import React from "react";

import { StyledGetUser, StyledHeader, StyledForm } from "./get-user-styles";

import greenLogo from "../../assets/images/green-logo.svg";

const GetUser = () => {
  return (
    <StyledGetUser>
      <StyledHeader>
        <img src={greenLogo} alt="GreenMile Logo" />
        <h1>
          Buscador <em>Dev</em>
        </h1>
        <p>
          Insira um nome ou apelido de um <b>Dev</b> do Github e descubra o que
          ele tem para oferecer.
        </p>
      </StyledHeader>
      <StyledForm></StyledForm>
    </StyledGetUser>
  );
};

export default GetUser;
