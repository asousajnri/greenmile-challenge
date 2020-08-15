import React from 'react';
import { connect } from 'react-redux';

import * as ReduxActions from '../../../store/actions';

import Button from '../../button';

import { Finded, NotFound } from './feedback-styles';

const Feedback = ({ findedUser, dispatch }) => {
  const handleClick = () => {
    dispatch(ReduxActions.firedSearch(false));
  };

  return (
    <>
      {findedUser ? (
        <Finded>
          <i className="far fa-laugh-beam"></i>
          <p>Ooopa! acho que encontramos algo.</p>

          <Button
            buttonTypeColor="white"
            onClick={handleClick}
          >
            Nova busca
          </Button>
        </Finded>
      ) : (
        <NotFound>
          <i className="far fa-sad-cry"></i>
          <p>
            Barbaridade tchê! Nenhum <b>dev</b> foi
            encontrado.
          </p>
          <Button
            buttonTypeColor="white"
            onClick={handleClick}
          >
            Tentar novamente
          </Button>
        </NotFound>
      )}
    </>
  );
};

export default connect(state => ({
  findedUser: state.findedUser,
}))(Feedback);
