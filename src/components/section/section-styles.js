import styled from 'styled-components';

import devices from '../../assets/styles/devices';

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 4rem;

  &:last-child {
    margin-bottom: 0;
  }

  h2 {
    text-transform: uppercase;
    color: ${props => props.theme.primary_color};
    font-size: 2.5rem;
    margin-bottom: 2rem;

    @media ${devices.tablet} {
      font-size: 3rem;
    }
  }
`;
