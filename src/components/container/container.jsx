import React from 'react';
import { connect } from 'react-redux';

import { StyledContainer } from './container-styles';

const Container = ({
  children,
  findedUser,
  firstSearch,
}) => {
  return (
    <StyledContainer
      findedUser={findedUser}
      firstSearch={firstSearch}
    >
      {children}
    </StyledContainer>
  );
};

export default connect(state => ({
  findedUser: state.findedUser,
  firstSearch: state.firstSearch,
}))(Container);
