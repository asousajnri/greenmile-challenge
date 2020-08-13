import styled from 'styled-components';
import { shade } from 'polished';

import devices from '../../../../assets/styles/devices';

export const StyledStarredRepository = styled.li`
  background: ${props => props.theme.white};
  padding: 3rem 2rem;
  border: 1px solid #e1e4e8;

  @media ${devices.tablet} {
    padding: 3rem;
  }
`;

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3,
  a {
    font-weight: 600;
    color: #24292e;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  button {
    cursor: pointer;
    border-radius: 0.5rem;
    padding: 1rem 1.5rem;
    color: ${props => props.theme.white};
    background-color: ${props => props.theme.primary_color};
    border-color: rgba(27, 31, 35, 0.15);
    transition: 0.3s;

    &:hover {
      background-color: ${props =>
        shade(0.3, props.theme.primary_color)};
    }
  }
`;

export const StyledContent = styled.div`
  padding: 2rem 0;

  p {
    font-size: 1.4rem;
    color: ${props => props.theme.text_gray};
  }
`;

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: flex-start;
  padding-top: 2rem;
  border-top: 1px solid #e1e4e8;

  h4 {
    margin-right: 2rem;
    font-weight: 500;
    font-size: 1.4rem;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    .ball {
      width: 1.5rem;
      height: 1.5rem;
      background: #ddd;
      display: inline-block;
      border-radius: 50%;
      margin-right: 0.5rem;
    }

    i {
      margin-right: 0.5rem;
    }

    &:last-child {
      margin-right: 0;
    }
  }
`;
