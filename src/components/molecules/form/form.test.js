import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Form from './form';

describe('<Form />', () => {
  it('should render', () => {
    render(<Form />);

    const input = screen.getByLabelText('input-text', {
      selector: 'input',
    });

    const inputLabelText = screen.getByText(/Nome do usuário/i, { 
      selector: 'label',
    });

    const button = screen.getByText(/Pesquisar/i, { 
      selector: 'span',
    });

    expect(input).toBeInTheDocument();
    expect(inputLabelText).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});