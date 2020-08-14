import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;

    &:hover,
    &:focus {
      box-shadow: none;
      outline: none;
    }
  }

  html, body, #root {
    height: 100%;

    &.heightAuto {
      height: auto;
    };
  }

  body {
    background-color: ${props =>
      props.theme.background_color_body};
  }

  #root {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  body,
  input,
  button,
  textarea {
    font: 500 1.6rem Montserrat;
  }

  img {
    display: block;
    max-width: 100%;
  }

  button {
    background-color: transparent;
    border: none;
  }
`;
