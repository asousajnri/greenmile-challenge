import styled from 'styled-components';

import devices, {
  breakpoints,
} from '../../assets/styles/devices';

export const StyledContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 2rem 0;

  max-width: ${breakpoints.desktop};
  width: 100%;
  height: 100vh;

  @media ${devices.tablet} {
    padding-top: 6rem;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;
