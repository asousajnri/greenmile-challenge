import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Input from './input';

describe('<Input />', () => {
  it('should be render without props', () => {
    render(<Input />);

    const inputElement = screen.getByLabelText('input-text', {
      selector: 'input',
    });

    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveStyle({ borderRadius: 'none' });
  });
});
