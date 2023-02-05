import { useState } from 'react';

import { ToastMessage } from '../ToastMessage';

import { Container } from './styles';

export function ToastContainer() {
  const [message] = useState([
    { id: Math.random(), type: 'default', text: 'Default text' },
    { id: Math.random(), type: 'error', text: 'Danger text' },
    { id: Math.random(), type: 'success', text: 'Success text' },
  ]);

  return (
    <Container>
      {message.map(({ id, type, text }) => (
        <ToastMessage key={id} type={type} text={text} />
      ))}
    </Container>
  );
}
