import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import store from './store';

import GlobalStyled from './assets/styles/global';
import defaultTheme from './assets/styles/themes/default';

import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyled />
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);
