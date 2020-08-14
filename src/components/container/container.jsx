import React from 'react';

import { StyledContainer } from './container-styles';

const Container = ({ children, firstSearch }) => {
  return (
    <StyledContainer firstSearch={firstSearch}>
      {children}
    </StyledContainer>
  );
};

export default Container;
