import React from 'react';

import { StyledContainer } from './container-styles';

const Container = ({ children, onSubmit }) => {
  return (
    <StyledContainer onSubmit={onSubmit}>
      {children}
    </StyledContainer>
  );
};

export default Container;
