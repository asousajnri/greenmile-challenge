import React from 'react';

import Button from '../button';
import Form from '../form';

import {
  StyledUserSearch,
  StyledHeader,
} from './user-search-styles';

import greenLogo from '../../assets/images/green-logo.svg';

const UserSearch = () => {
  return (
    <StyledUserSearch>
      <StyledHeader>
        <img src={greenLogo} alt="GreenMile Logo" />
        <h1>
          Buscador <em>Dev</em>
        </h1>
        <p>
          Insira um <em>nome</em> ou <em>apelido</em> de um
          <b>Dev</b> do <b>Github</b> e descubra o que ele
          tem para oferecer.
        </p>
      </StyledHeader>
      <Form.Container>
        <Form.Input label="Nome ou Apelido" />
        <Button buttonTypeColor="white" type="submit">
          Buscar
        </Button>
      </Form.Container>
    </StyledUserSearch>
  );
};

export default UserSearch;
