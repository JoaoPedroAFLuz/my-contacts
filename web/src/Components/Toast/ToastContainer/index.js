import { ToastMessage } from '../ToastMessage';

import { Container } from './styles';

export function ToastContainer() {
  return (
    <Container>
      <ToastMessage message="Default toast" />
      <ToastMessage message="Error toast" type="error" />
      <ToastMessage message="Success toast" type="success" />
    </Container>
  );
}
