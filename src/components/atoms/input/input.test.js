import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Input from './input';

describe('<Input />', () => {
  it('should render without props', () => {
    render(<Input />);

    const inputElement = screen.getByLabelText('input-text', {
      selector: 'input',
    });

    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveStyle({ borderRadius: 'none' });
  });

  it('should render with props (Radius)', () => {
    render(<Input borderRadius />);

    const inputElement = screen.getByLabelText('input-text', { 
      selector: 'input', 
    });

    expect(inputElement).toHaveStyle({ borderRadius: '0.5rem' });
  });

  it('should render with label', () => {
    render(<Input label="Button" />);

    const inputLabel = screen.getByLabelText('input-label', {
      selector: 'label',
    });

    expect(inputLabel).toBeInTheDocument();
  });
});
