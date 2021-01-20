import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

import Button from './button';

describe('<Button />', () => {
  it('should render without props', () => {
    const { container } = render(<Button />);

    const buttonText = screen.getByText(/Button/i, {
      selector: 'span',
    });

    expect(buttonText).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render prop (Loading)', () => {
    const { container } = render(<Button isLoading disabled />);

    const buttonText = screen.getByText(/Carregando.../i, {
      selector: 'span',
    });

    expect(buttonText).toBeInTheDocument();
    expect(container.firstChild).toBeDisabled();
    expect(container.firstChild).toHaveStyle({
      pointerEvents: 'none',
    });
  });

  it('should render with icon', () => {
    render(<Button label="Button" icon="FiFeather" />);

    const ariaLabelIcon = screen.getByLabelText(/button-icon/i, {
      selector: 'svg',
    });

    expect(ariaLabelIcon).toBeInTheDocument();
  });

  it('should call onCLick when user clicks', () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick} />);

    const button = screen.getByRole('button');
    userEvent.click(button);

    expect(onClick).toHaveBeenCalled();
  });

  it('should call onCLick once one', () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick} />);

    const button = screen.getByRole('button');
    userEvent.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
