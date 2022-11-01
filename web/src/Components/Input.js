import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;
  background: #ffffff;
  border: 2px solid #fff;
  border-radius: 4px;
  height: 52px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  outline: none;
  padding: 0 16px;
  font-size: 16px;
  transition: border-color 0.2s ease-in;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary.main};
  }
`;
