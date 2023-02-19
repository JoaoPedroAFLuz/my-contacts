import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;
  gap: 24px;

  .details {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 8px;

    strong {
      color: ${({ theme }) => theme.colors.danger.main};
      font-size: 22px;
    }
  }
`;
