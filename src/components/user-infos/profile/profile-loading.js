import React from 'react';
import styled from 'styled-components';

import PlaceholderEffect from '../../../assets/styles/placeholder-effect';

import devices, {
  breakpoints,
} from '../../../assets/styles/devices';

export const StyledProfile = styled.div`
  margin-bottom: 4rem;

  @media ${devices.desktop} {
    display: flex;
    margin-bottom: 6rem;
  }
`;

export const StyledPhoto = styled(PlaceholderEffect)`
  height: 25rem;
  width: 100%;

  @media ${devices.mobile} {
    height: 35rem;
  }

  @media ${devices.desktop} {
    width: 25rem;
    height: auto;
    flex: 1;
  }
`;

export const StyledContent = styled.div`
  padding: 3rem 2rem;

  @media ${devices.mobile} {
    padding: 3em;
  }

  @media ${devices.desktop} {
    flex: 1;
  }

  @media ${devices.widescreen} {
    flex: 1.2;
  }
`;

export const StyledTitle = styled(PlaceholderEffect)`
  height: 2rem;
  width: 100%;
  margin-bottom: 2rem;
`;

export const StyledParagraph = styled(PlaceholderEffect)`
  height: 0.5rem;
  width: 100%;
  margin-bottom: 1rem;
`;

export const StyledLinkContainer = styled.div`
  display: flex;
`;

export const StyledIcon = styled(PlaceholderEffect)`
  height: 1.5rem;
  width: 1.5rem;
  border-radius: 50%;
  margin-right: 1rem;
`;

export const StyledText = styled(PlaceholderEffect)`
  height: 1.5rem;
  width: 100%;
  max-width: 25rem;

  @media ${devices.tablet} {
    max-width: 45rem;
  }
`;

const ProfileLoading = () => (
  <StyledProfile>
    <StyledPhoto></StyledPhoto>
    <StyledContent>
      <StyledTitle />
      <StyledParagraph />
      <StyledParagraph />
      <StyledLinkContainer>
        <StyledIcon />
        <StyledText />
      </StyledLinkContainer>
    </StyledContent>
  </StyledProfile>
);

export default ProfileLoading;
