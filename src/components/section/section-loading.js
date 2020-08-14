import React from 'react';
import styled from 'styled-components';

import PlaceholderEffect from '../../assets/styles/placeholder-effect';

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 4rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const StyledTitle = styled(PlaceholderEffect)`
  height: 2rem;
  width: 100%;
  max-width: 40rem;
  margin-bottom: 2rem;
`;

const SectionLoading = ({ children }) => (
  <StyledSection>
    <StyledTitle />
    {children}
  </StyledSection>
);

export default SectionLoading;
