import styled from 'styled-components';

import devices from '../../../assets/styles/devices';

export const StyledProfile = styled.div`
  @media ${devices.desktop} {
    display: flex;
  }
`;

export const StyledPhoto = styled.div`
  height: 25rem;
  width: 100%;

  @media ${devices.desktop} {
    width: 25rem;
    height: auto;
    flex: 1;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const StyledContent = styled.div`
  background: ${props => props.theme.white};
  padding: 3rem 2rem;

  @media ${devices.desktop} {
    padding: 3em;
    flex: 1.5;
  }

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
    font-size: 1.6rem;
  }

  span {
    font-size: 1.8rem;
  }

  i {
    margin-right: 1rem;
    font-size: 2rem;
  }
`;
