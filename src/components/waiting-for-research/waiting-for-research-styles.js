import styled from 'styled-components';

export const StyledWaitingForResearch = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.white};

  ${props =>
    props.isFetchinging
      ? 'background: #0000007a;'
      : 'background: none;'};

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
