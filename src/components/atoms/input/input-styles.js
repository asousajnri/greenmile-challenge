import styled from 'styled-components';

export const StyledInput = styled.input`
    min-height: 4.5rem;
    border: 2px solid ${props => props.theme.gray};
    padding: 0 2rem;
    border-radius: ${props => props.radius ? '0.5rem' : 'none'};
    width: 100%;

    &:focus,
    &:hover {
        box-shadow: none;
        outline: none;
    }
`;