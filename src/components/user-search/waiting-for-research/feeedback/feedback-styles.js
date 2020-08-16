import styled from 'styled-components';

export const Default = styled.div`
  height: 100%;
  width: 100%;
  padding: 3rem;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const NotFound = styled(Default)`
  background: ${props => props.theme.red};
`;

export const Finded = styled(Default)`
  background: ${props => props.theme.primary_color};
`;
