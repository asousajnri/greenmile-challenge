import React from 'react';
import styled from 'styled-components';

import PlaceholderEffect from '../../../../assets/styles/placeholder-effect';

export const StyledStarredRepository = styled(
  PlaceholderEffect
)`
  display: flex;
  flex-direction: column;
  margin-bottom: 4rem;
  height: 30rem;
`;

const StarredRepositoryLoading = () => (
  <StyledStarredRepository />
);

export default StarredRepositoryLoading;
