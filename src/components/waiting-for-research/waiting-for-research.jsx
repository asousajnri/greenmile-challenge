import React from 'react';
import FadeIn from 'react-fade-in';
import { connect } from 'react-redux';

import loadingImage from '../../assets/images/loading.gif';

import Button from '../button';

import { StyledWaitingForResearch } from './waiting-for-research-styles';
import './fade-in.css';

const FindedUser = ({ findedUser }) => {
  return (
    <>
      {findedUser ? (
        <>
          <i class="far fa-laugh-beam"></i>
          <p>Ooopa! acho que encontramos algo.</p>

          <Button buttonTypeColor="white">
            Nova busca
          </Button>
        </>
      ) : (
        <>
          <i class="far fa-sad-cry"></i>
          <p>
            Barbaridade tchê! nenhum <b>dev</b> foi
            encontrado.
          </p>
          <Button buttonTypeColor="white">
            Tentar novamente
          </Button>
        </>
      )}
    </>
  );
};

const WaitingForResearch = ({ isFetch, findedUser }) => {
  return (
    <FadeIn className="waiting-for-research">
      <StyledWaitingForResearch
        isFetch={isFetch}
        findedUser={findedUser}
      >
        {isFetch ? (
          <img src={loadingImage} alt="Loading Image" />
        ) : (
          <FindedUser findedUser={findedUser} />
        )}
      </StyledWaitingForResearch>
    </FadeIn>
  );
};

export default connect(state => ({
  isFetch: state.isFetch,
  findedUser: state.findedUser,
}))(WaitingForResearch);
