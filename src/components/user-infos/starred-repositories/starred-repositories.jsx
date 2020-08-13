import React from 'react';

import StarredRepository from './starred-repository';

import { StyledStarredRepositories } from './starred-repositories-styles';

const StarredRepositories = () => {
  return (
    <StyledStarredRepositories>
      <StarredRepository />
    </StyledStarredRepositories>
  );
};

export default StarredRepositories;
