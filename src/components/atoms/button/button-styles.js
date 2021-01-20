import styled, { css } from 'styled-components';
import { shade, lighten } from 'polished';

import { renderColor } from '../../../utils';

export const StyledButton = styled.button`
  background: ${({ primary, theme }) => (primary ? theme.primary : theme.gray)};
  box-shadow: 0 0.4rem
    ${({ primary, theme }) =>
      primary
        ? shade(0.2, renderColor(theme.primary))
        : shade(0.2, renderColor(theme.gray))};
  color: ${props => props.theme.white};

  font-size: 1.2rem;
  border: none;
  padding: 1rem 2rem;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  border-radius: 0.3rem;

  display: flex;
  align-items: center;
  justify-content: center;

  &:disabled {
    pointer-events: none;
    background: ${({ theme: { gray } }) =>
      gray && lighten(0.2, renderColor(gray))};
    box-shadow: 0 0.3rem
      ${({ theme: { gray } }) => gray && lighten(0.3, renderColor(gray))};
    color: ${({ theme: { gray } }) => gray && shade(0.2, renderColor(gray))};
    top: 0.2rem;
  }

  ${props =>
    props.isLoading &&
    css`
      color: ${props => props.theme.white} !important;
    `}

  &:hover,
    &:focus {
    top: 0.2rem;
    box-shadow: 0 0.3rem
      ${({ primary, theme }) =>
        primary
          ? shade(0.2, renderColor(theme.primary))
          : shade(0.2, renderColor(theme.gray))};
    outline: none;

    ${props =>
      props.secondary &&
      css`
        background: ${props => shade(0.3, props.theme.secondary)};
        box-shadow: 0 0.3rem
          ${({ theme: { secondary } }) => shade(0.2, renderColor(secondary))};
      `}
  }

  ${props =>
    props.secondary &&
    css`
      background: ${prosp => props.theme.secondary};
      box-shadow: 0 0.4rem
        ${({ theme: { secondary } }) => shade(0.1, renderColor(secondary))};
    `}

  ${props =>
    props.noRadius &&
    css`
      border-radius: 0;
    `}

    .button-icon {
    margin-right: 0.5rem;
  }
`;
