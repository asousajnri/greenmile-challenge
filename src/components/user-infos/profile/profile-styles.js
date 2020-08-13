import styled from 'styled-components';

import devices from '../../../assets/styles/devices';

export const StyledProfile = styled.div``;

export const StyledPhoto = styled.div`
  /* max-width: 30rem; */
  height: 25rem;
  width: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const StyledContent = styled.div`
  background: ${props => props.theme.white};
  padding: 3rem 2rem;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    color: ${props => props.theme.primary_color};

    @media ${devices.tablet} {
      font-size: 3rem;
    }
  }

  p {
    color: ${props => props.theme.paraghapg_color};
    display: inline-block;
    margin-bottom: 2rem;
  }

  span {
    font-size: 1.8rem;
  }

  i {
    margin-right: 1rem;
    font-size: 2rem;
  }
`;
