import React from 'react';
import styled from 'styled-components';

import PlaceholderEffect from '../../../assets/styles/placeholder-effect';

export const StyledDevLocationLoading = styled(
  PlaceholderEffect
)`
  width: 100%;
  height: 3rem;
`;

const DevLocationLoading = () => (
  <StyledDevLocationLoading></StyledDevLocationLoading>
);

export default DevLocationLoading;
