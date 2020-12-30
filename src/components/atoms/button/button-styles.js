import styled, { css } from 'styled-components';
import { shade, lighten } from 'polished';

export const StyledButton = styled.button`
    font-size: 1.2rem;
    background: ${props => props.primary ? props.theme.primary : props.theme.gray};
    color: ${props => props.theme.white};
    border: none;
    padding: 1rem 2rem;
    box-shadow: 0 0.4rem ${props => props.primary ? shade(0.2, props.theme.primary) : shade(0.2, props.theme.gray)};
    transition: all 0.3s ease;
    cursor: pointer;
    position: relative;
    font-weight: ${props => props.bold ? 'bold' : 'normal'};

    display: flex;
    align-items: center;
    justify-content: center;

    &:disabled {
        pointer-events: none;
        background: ${props => lighten(0.2, props.theme.gray)};
        box-shadow: 0 0.3rem ${props => lighten(0.3, props.theme.gray)};
        color: ${props => shade(0.2, props.theme.gray)};
        top: 2;
    }

    ${props => props.isLoading && css`
        color: ${props => props.theme.white} !important;
    `}

    &:hover,
    &:focus {
        top: 0.2rem;
        box-shadow: 0 0.3rem ${props => props.primary ? shade(0.3, props.theme.primary) : shade(0.3, props.theme.gray)};
        outline: none;

        ${props => props.secondary && css`
            background: ${props =>  shade(0.3, props.theme.secondary)};
            box-shadow: 0 0.3rem ${props => shade(0.2, props.theme.secondary)};
        `}
    }

    ${props => props.secondary && css`
        background: ${prosp => props.theme.secondary};
        box-shadow: 0 0.4rem ${props => shade(0.1, props.theme.secondary)};
    `}

    ${props => props.radius && css`
        border-radius: 3rem;
    `}

    .button-icon {
        margin-right: 0.5rem;
    }
`;