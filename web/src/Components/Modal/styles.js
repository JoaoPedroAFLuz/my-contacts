import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const scaleIn = keyframes`
  from {
    scale: 0;
  }

  to {
    scale: 1;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  backdrop-filter: blur(4px);
  background: rgba(0, 0, 0, 0.6);

  animation: ${fadeIn} 0.3s;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 450px;
  margin: 0 16px;
  padding: 24px;

  background: #ffffff;
  border-radius: 4px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);

  animation: ${scaleIn} 0.3s;

  > h1 {
    font-size: 22px;
    color: ${({ theme, danger }) =>
      danger ? theme.colors.danger.main : theme.colors.gray[900]};
  }

  .modal-body {
    margin-top: 32px;
  }
`;

export const Footer = styled.footer`
  margin-top: 32px;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  .cancelButton {
    height: 52px;
    margin-right: 24px;

    background: transparent;
    color: ${({ theme }) => theme.colors.gray[200]};
    border: none;
    font-size: 16px;

    &[disabled] {
      cursor: not-allowed;
    }
  }
`;
