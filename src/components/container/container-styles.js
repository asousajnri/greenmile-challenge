import styled, { css } from 'styled-components';

import devices, {
  breakpoints,
} from '../../assets/styles/devices';

const styledFirstSearch = css`
  ${props =>
    props.firstSearch
      ? css`
          flex-direction: column;
          align-items: center;
          padding: 4rem 2rem 0;

          @media ${devices.tablet} {
            padding-top: 6rem;
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-start;
          }
        `
      : css`
          justify-content: center;
          align-items: center;
          padding: 4rem 2rem 0;
        `}
`;

export const StyledContainer = styled.main`
  display: flex;
  max-width: ${breakpoints.desktop};
  width: 100%;
  height: 100vh;

  ${styledFirstSearch}
`;
