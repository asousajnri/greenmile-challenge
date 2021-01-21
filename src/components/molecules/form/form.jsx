import React from 'react';

import {
  Input,
  Button,
} from '../../atoms';

import {
  StyledForm,
} from './form-styles';

const Form = ({ submit }) => {
  return (
    <StyledForm onSubmit={submit}>
      <Input 
        label="Nome do usuário" 
      />
      <Button label="Pesquisar" />
    </StyledForm>
  )
};

export default Form;