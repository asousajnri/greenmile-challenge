import React, { useRef } from 'react';
import { connect } from 'react-redux';
import FadeIn from 'react-fade-in';

import * as ReduxActions from '../../store/actions';

import fetchApi from '../../utils/fetchApi';
import timeout from '../../utils/timeout';

import Button from '../button';
import Form from '../form';
import WaitingForSearch from './waiting-for-research';

import {
  StyledUserSearch,
  StyledHeader,
} from './user-search-styles';

import greenLogo from '../../assets/images/green-logo.svg';

const UserSearch = ({
  findedUser,
  firedSearch,
  dispatch,
}) => {
  const inputRef = useRef(null);

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      dispatch(ReduxActions.ifFetchinging(true));
      dispatch(ReduxActions.firedSearch(true));

      const response = await fetchApi(
        inputRef.current.value
      );

      if (response) {
        dispatch(ReduxActions.setDevData(response));
        timeout(dispatch(ReduxActions.findedUser(true)));
      } else {
        timeout(dispatch(ReduxActions.findedUser(false)));
      }
    } catch (err) {
      timeout(dispatch(ReduxActions.findedUser(false)));
    } finally {
      timeout(dispatch(ReduxActions.ifFetchinging(false)));
    }
  };

  return (
    <StyledUserSearch findedUser={findedUser}>
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
  findedUser: state.findedUser,
  firedSearch: state.firedSearch,
}))(UserSearch);
