import styled from 'styled-components';

export const StyledInput = styled.div`
  margin-bottom: 2rem;

  label {
    display: block;
    margin-bottom: 1rem;
    font-size: 1.6rem;
    color: ${props => props.theme.white};
  }

  input {
    background-color: transparent;
    width: 100%;
    height: 4.5rem;
    border: 2px solid ${props => props.theme.white};
    border-radius: 0.5rem;
    padding: 0 2rem;
    color: ${props => props.theme.white};
  }
`;
