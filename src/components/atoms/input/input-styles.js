import styled from 'styled-components';

export const StyledInput = styled.div`
  display: flex;
  flex-direction: column;

  input {
    min-height: 4.5rem;
    border: 2px solid ${props => props.theme.gray};
    padding: 0 2rem;
    border-radius: ${props => (props.radius ? '0.5rem' : 'none')};
    width: 100%;
    font-size: 1.6rem;

    &:focus,
    &:hover {
      box-shadow: none;
      outline: none;
    }
  }
`;

export const StyledLabel = styled.label`
  display: flex;
  font-size: 1.2rem;
  line-height: 1;
  margin-bottom: 1rem;
`;
