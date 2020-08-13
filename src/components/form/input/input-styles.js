import styled from "styled-components";

export const StyledInput = styled.div`
  margin-bottom: 2rem;

  label {
    display: block;
    margin-bottom: 1rem;
    font-size: 1.6rem;
    color: var(--white-color);
  }

  input {
    background-color: transparent;
    width: 100%;
    height: 4.5rem;
    border: 2px solid var(--white-color);
    border-radius: 0.5rem;
    padding: 0 2rem;
    color: var(--white-color);
  }
`;
