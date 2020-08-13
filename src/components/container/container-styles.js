import styled from 'styled-components';

import devices, {
  breakpoints,
} from '../../assets/styles/devices';

export const StyledContainer = styled.main`
  display: flex;
  flex-direction: column;
  padding: 0 2rem;

  max-width: ${breakpoints.fullhd};
  width: 100%;
  height: 100vh;

  @media ${devices.tablet} {
    padding-top: 6rem;
    flex-direction: row;
    justify-content: space-between;
  }
`;
