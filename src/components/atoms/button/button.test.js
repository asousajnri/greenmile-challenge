import React from 'react';

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import defaultTheme from '../../../assets/styles/themes/default';

import Button from './button';

describe('<Button />', () => {
    it('should render without props', () => {
        const { container } = render(<Button />);

        const buttonText = screen.getByText(/Button/i, { selector: 'span' });

        expect(buttonText).toBeInTheDocument();
        expect(container.firstChild).toMatchSnapshot();
    });

    it('should render prop (Loading)', () => {
        render(<Button isLoading disabled />);

        const buttonText = screen.getByText(/Carregando.../i, { selector: 'span' });

        expect(buttonText).toBeInTheDocument();
    });
})