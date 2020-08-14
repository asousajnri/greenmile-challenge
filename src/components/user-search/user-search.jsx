import React, { useRef } from 'react';
import { connect } from 'react-redux';
import FadeIn from 'react-fade-in';

import * as ReduxActions from '../../store/actions';

import api from '../../services/api';

import Button from '../button';
import Form from '../form';
import WaitingForSearch from '../waiting-for-research';

import {
  StyledUserSearch,
  StyledHeader,
} from './user-search-styles';

import greenLogo from '../../assets/images/green-logo.svg';

const UserSearch = ({
  findedUser,
  firedSearch,
  dispatch,
  firstSearch,
}) => {
  const inputRef = useRef(null);

  const handleSubmit = async e => {
    console.log('TESTE: ', inputRef.current.value);

    e.preventDefault();

    if (!firstSearch) {
      dispatch(ReduxActions.firstSearch(true));
    }

    try {
      dispatch(ReduxActions.ifFetchinging(true));
      dispatch(ReduxActions.firedSearch(true));

      const response = await api(inputRef.current.value);

      console.log(response);

      if (response.data && response.status === 200) {
        dispatch(ReduxActions.setDevData(response.data));
        setTimeout(() => {
          dispatch(ReduxActions.findedUser(true));
        }, 3000);
      } else {
        setTimeout(() => {
          dispatch(ReduxActions.findedUser(false));
        }, 3000);
      }
    } catch (err) {
      setTimeout(() => {
        dispatch(ReduxActions.findedUser(false));
      }, 3000);
    } finally {
      setTimeout(() => {
        dispatch(ReduxActions.ifFetchinging(false));
      }, 3000);
    }
  };

  return (
    <StyledUserSearch
      findedUser={findedUser}
      firstSearch={firstSearch}
    >
      {firedSearch && <WaitingForSearch />}

      <FadeIn>
        <StyledHeader>
          <img src={greenLogo} alt="GreenMile Logo" />
          <p>
            Insira um <em>nome</em> ou <em>apelido</em> de
            um <b>Dev</b> do <b>Github</b> e descubra o que
            ele tem para oferecer.
          </p>
        </StyledHeader>
        <Form.Container onSubmit={e => handleSubmit(e)}>
          <Form.Input
            inputRef={inputRef}
            name="name"
            label="Nome ou Apelido"
          />
          <Button buttonTypeColor="white" type="submit">
            Buscar
          </Button>
        </Form.Container>
      </FadeIn>
    </StyledUserSearch>
  );
};

export default connect(state => ({
  firstSearch: state.firstSearch,
  findedUser: state.findedUser,
  firedSearch: state.firedSearch,
}))(UserSearch);
