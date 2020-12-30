import React from "react";
import { ThemeProvider } from 'styled-components';
import DefaultTheme from '../src/assets/styles/themes/default';

export const decorators = [
  (Story) => (
    <ThemeProvider theme={DefaultTheme}>
      <Story />
    </ThemeProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}