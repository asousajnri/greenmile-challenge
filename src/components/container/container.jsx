import React from 'react';
import { connect } from 'react-redux';

import { StyledContainer } from './container-styles';

const Container = ({ children, findedUser }) => {
  return (
    <StyledContainer findedUser={findedUser}>
      {children}
    </StyledContainer>
  );
};

export default connect(state => ({
  findedUser: state.findedUser,
}))(Container);
