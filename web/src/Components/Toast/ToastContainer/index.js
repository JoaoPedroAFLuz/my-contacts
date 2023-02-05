import { useEffect, useState } from 'react';

import { ToastMessage } from '../ToastMessage';

import { Container } from './styles';

export function ToastContainer() {
  const [message, setMessage] = useState([]);

  useEffect(() => {
    function handleAddToast(event) {
      const { type, text } = event.detail;

      setMessage((prevState) => [
        ...prevState,
        { id: Math.random(), type, text },
      ]);
    }

    document.addEventListener('addtoast', handleAddToast);

    return () => {
      document.removeEventListener('addtoast');
    };
  }, []);

  return (
    <Container>
      {message.map(({ id, type, text }) => (
        <ToastMessage key={id} type={type} text={text} />
      ))}
    </Container>
  );
}
