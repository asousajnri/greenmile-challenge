import styled, { css } from 'styled-components';
import { shade } from 'polished';

export const StyledButton = styled.button`
  width: 100%;
  padding: 2rem;
  border-radius: 0.5rem;
  font-size: 1.8rem;
  cursor: pointer;
  transition: 0.3s;

  ${props =>
    props.buttonTypeColor === 'primary' &&
    css`
      background: ${props => props.theme.button_primary};
      color: ${props => props.theme.white};

      &:hover {
        background: ${props =>
          shade(0.9, props.theme.primary_color)};
      }
    `}

  ${props =>
    props.buttonTypeColor === 'secondary' &&
    css`
      background: ${props => props.theme.button_secondary};
      color: ${props => props.theme.white};

      &:hover {
        background: ${props =>
          shade(0.9, props.theme.secondary_color)};
      }
    `}

  ${props =>
    props.buttonTypeColor === 'white' &&
    css`
      background: ${props => props.theme.button_white};
      color: ${props => props.theme.black};

      &:hover {
        background: ${props =>
          shade(0.9, props.theme.primary_color)};
      }
    `}
`;
