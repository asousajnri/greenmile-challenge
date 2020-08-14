import styled, { css } from 'styled-components';

import devices from '../../assets/styles/devices';

export const StyledUserSearch = styled.div`
  position: relative;
  max-width: 35rem;
  overflow: hidden;
  border-radius: 0.5rem;

  ${props =>
    props.findedUser &&
    css`
      margin-bottom: 6rem;

      @media ${devices.tablet} {
        margin-right: 3rem;
        margin-bottom: 0;
      }
    `}
`;

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: ${props =>
    props.theme.background_user_search};
  padding: 4rem 2rem;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;

  @media ${devices.desktop} {
    padding: 3rem;
  }

  img {
    width: 23rem;
    margin-bottom: 2rem;

    @media (min-width: 600px) {
      width: 25rem;
    }
  }

  h1,
  p {
    text-align: center;
  }

  h1 {
    text-transform: uppercase;
    font-size: 3rem;
    font-weight: 900;
    margin-bottom: 1rem;
    color: ${props => props.theme.primary_color};
  }

  p {
    font-size: 1.6rem;
  }

  em {
    font-style: normal;
    color: var(--primary-color);
  }
`;

export const StyledForm = styled.div`
  padding: 2rem;
  background: #e8e8e8;
`;
