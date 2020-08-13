import styled from 'styled-components';

import devices from '../../../assets/styles/devices';

export const StyledProfile = styled.div`
  margin-bottom: 4rem;

  @media ${devices.desktop} {
    display: flex;
    margin-bottom: 6rem;
  }
`;

export const StyledPhoto = styled.div`
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

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const StyledContent = styled.div`
  background: ${props => props.theme.white};
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

  h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    color: ${props => props.theme.primary_color};

    @media ${devices.tablet} {
      font-size: 3rem;
    }
  }

  p {
    color: ${props => props.theme.text_gray};
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
