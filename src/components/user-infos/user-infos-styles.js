import styled from 'styled-components';

import devices from '../../assets/styles/devices';

export const StyledUserInfos = styled.div`
  width: 100%;
  max-width: 64.4rem;

  @media ${devices.tablet} {
    padding-left: 4rem;
  }
`;

export const Alert = styled.div`
  color: #856404;
  background-color: #fff3cd;
  border-color: #ffeeba;
  padding: 0.75rem 1.25rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  font-size: 1.6rem;
`;
