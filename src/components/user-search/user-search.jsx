import React from 'react';
import FadeIn from 'react-fade-in';

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
      <FadeIn>
        <StyledHeader>
          <img src={greenLogo} alt="GreenMile Logo" />
          <p>
            Insira um <em>nome</em> ou <em>apelido</em> de
            um
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
      </FadeIn>
    </StyledUserSearch>
  );
};

export default UserSearch;
