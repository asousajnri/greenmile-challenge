import styled, { css } from 'styled-components';

import devices, {
  breakpoints,
} from '../../assets/styles/devices';

export const StyledContainer = styled.main`
  display: flex;
  flex-direction: column;
  max-width: ${breakpoints.desktop};
  width: 100%;
  height: 100%;

  @media ${devices.tablet} {
    padding-top: 6rem;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }

  ${props =>
    props.findedUser
      ? css`
          align-items: center;
          padding: 6rem 2rem 6rem;
          height: auto;
        `
      : css`
          justify-content: center;
          align-items: center;
          padding: 0 2rem;
        `}
`;
