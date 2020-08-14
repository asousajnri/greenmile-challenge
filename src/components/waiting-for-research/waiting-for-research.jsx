import React from 'react';
import FadeIn from 'react-fade-in';
import { connect } from 'react-redux';

import * as ReduxActions from '../../store/actions';

import loadingImage from '../../assets/images/loading.gif';

import Button from '../button';

import { StyledWaitingForResearch } from './waiting-for-research-styles';
import './fade-in.css';

const FindedUser = ({ findedUser, dispatch }) => {
  const handleClick = () => {
    dispatch(ReduxActions.firedSearch(false));
  };

  return (
    <>
      {findedUser ? (
        <>
          <i className="far fa-laugh-beam"></i>
          <p>Ooopa! acho que encontramos algo.</p>

          <Button
            buttonTypeColor="white"
            onClick={handleClick}
          >
            Nova busca
          </Button>
        </>
      ) : (
        <>
          <i className="far fa-sad-cry"></i>
          <p>
            Barbaridade tchê! nenhum <b>dev</b> foi
            encontrado.
          </p>
          <Button
            buttonTypeColor="white"
            onClick={handleClick}
          >
            Tentar novamente
          </Button>
        </>
      )}
    </>
  );
};

const WaitingForResearch = ({
  isFetchinging,
  findedUser,
  firedSearch,
  dispatch,
}) => {
  return (
    <FadeIn className="waiting-for-research">
      <StyledWaitingForResearch
        isFetchinging={isFetchinging}
        findedUser={findedUser}
        firedSearch={firedSearch}
      >
        {isFetchinging ? (
          <img src={loadingImage} alt="Loading Image" />
        ) : (
          <FindedUser
            findedUser={findedUser}
            firedSearch={firedSearch}
            dispatch={dispatch}
          />
        )}
      </StyledWaitingForResearch>
    </FadeIn>
  );
};

export default connect(state => ({
  isFetchinging: state.isFetchinging,
  findedUser: state.findedUser,
  firedSearch: state.firedSearch,
}))(WaitingForResearch);
