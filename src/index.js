import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from "styled-components";

import GlobalStyled from './assets/styles/global';
import defaultTheme from './assets/styles/themes/default';

import App from './App';

ReactDOM.render(
  <ThemeProvider theme={defaultTheme}>
    <GlobalStyled />
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
