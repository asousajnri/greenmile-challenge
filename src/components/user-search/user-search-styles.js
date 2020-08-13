import styled from "styled-components";

export const StyledUserSearch = styled.div`
  max-width: 35rem;
`;

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: var(--background-get-user);
  padding: 5rem 2rem 4rem;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;

  img {
    width: 23rem;
    margin-bottom: 2rem;

    @media (min-width: 600px) {
      width: 25rem;
    }
  }

  h1,
  p {
    text-align: center;
  }

  h1 {
    text-transform: uppercase;
    font-size: 3rem;
    font-weight: 900;
    margin-bottom: 1rem;
  }

  em {
    font-style: normal;
    color: var(--primary-color);
  }
`;

export const StyledForm = styled.div`
  padding: 2rem;
  background: #e8e8e8;
`;
