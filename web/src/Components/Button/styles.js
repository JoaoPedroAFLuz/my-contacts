import styled, { css } from 'styled-components';

export const Button = styled.button`
  height: 52px;
  padding: 0 16px;

  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  background: ${({ theme }) => theme.colors.primary.main};
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  transition: background 0.2s ease-in;
  appearance: none;

  &:hover {
    background: ${({ theme }) => theme.colors.primary.light};
  }

  &:active {
    background: ${({ theme }) => theme.colors.primary.dark};
  }

  &[disabled] {
    background: #ccc !important;
    cursor: not-allowed !important;
  }

  ${({ theme, danger }) =>
    danger &&
    css`
      background: ${theme.colors.danger.main};

      &:hover {
        background: ${theme.colors.danger.light};
      }

      &:active {
        background: ${theme.colors.danger.dark};
      }
    `};
`;
