import React from 'react';
import FadeIn from 'react-fade-in';
import { connect } from 'react-redux';

import loadingImage from '../../assets/images/loading.gif';

import Feedback from './feeedback';

import { StyledWaitingForResearch } from './waiting-for-research-styles';
import './fade-in.css';

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
          <img src={loadingImage} alt="Loading Gif" />
        ) : (
          <Feedback />
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
