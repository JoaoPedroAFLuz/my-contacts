import { useEffect, useState } from 'react';

import { toastEventManager } from '../../../Utils/toast';
import { ToastMessage } from '../ToastMessage';

import { Container } from './styles';

export function ToastContainer() {
  const [message, setMessage] = useState([]);

  useEffect(() => {
    function handleAddToast({ type, text }) {
      setMessage((prevState) => [
        ...prevState,
        { id: Math.random(), type, text },
      ]);
    }

    toastEventManager.on('addtoast', handleAddToast);

    return () => {
      toastEventManager.removeListener('addtoast', handleAddToast);
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
