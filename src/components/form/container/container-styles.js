import styled from 'styled-components';

export const StyledContainer = styled.form`
  position: relative;
  padding: 4rem 3rem;
  background: ${props => props.theme.primary_color};
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
`;
