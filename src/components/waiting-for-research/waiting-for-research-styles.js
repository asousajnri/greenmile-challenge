import styled, { css } from 'styled-components';

export const StyledWaitingForResearch = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  color: ${props => props.theme.white};

  ${props =>
    props.isFetch &&
    css`
      background: #0000007a;
    `}

  ${props =>
    props.findedUser &&
    css`
      background: ${props.theme.primary_color};
    `}

  ${props =>
    !props.findedUser &&
    !props.isFetch &&
    css`
      background: ${props.theme.red};
    `}

  img {
    width: 15rem;
  }

  i {
    font-size: 10rem;
    margin-bottom: 2rem;
  }

  p {
    text-align: center;
    font-size: 2rem;
    display: inline-block;
    margin-bottom: 3rem;
  }
`;
