import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    font-size: 62.5%;

    --background-color: #E9EBEE;
    --primary-color: #8BB03E;
    --secondary-color: #28343D;

    --background-get-user: #FFFFFF;
  }

  * {
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100vh;
  }

  body {
    background-color: var(--background-color);
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
`;
