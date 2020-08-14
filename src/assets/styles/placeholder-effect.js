import styled from 'styled-components';

const PlaceholderEffect = styled.div`
  @keyframes placeHolderShimmer {
    0% {
      background-position: -1000px 0;
    }
    100% {
      background-position: 1000px 0;
    }
  }
  animation-duration: 1.5s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-name: placeHolderShimmer;
  background: #f6f7f8;
  background: linear-gradient(
    to right,
    #eeeeee 8%,
    #dddddd 18%,
    #eeeeee 33%
  );
  background-size: 3000px 300px;
  position: relative;
  border-radius: 1rem;
`;

export default PlaceholderEffect;
