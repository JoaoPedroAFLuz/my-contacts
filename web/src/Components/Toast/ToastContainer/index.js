import { useCallback, useEffect, useState } from 'react';

import { toastEventManager } from '../../../Utils/toast';
import { ToastMessage } from '../ToastMessage';

import { Container } from './styles';

export function ToastContainer() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    function handleAddToast({ type, text }) {
      setMessages((prevState) => [
        ...prevState,
        { id: Math.random(), type, text },
      ]);
    }

    toastEventManager.on('addtoast', handleAddToast);

    return () => {
      toastEventManager.removeListener('addtoast', handleAddToast);
    };
  }, []);

  const handleRemoveMessage = useCallback((id) => {
    setMessages((prevState) =>
      prevState.filter((message) => message.id !== id)
    );
  }, []);

  return (
    <Container>
      {messages.map(({ id, type, text }) => (
        <ToastMessage
          key={id}
          type={type}
          text={text}
          onRemoveMessage={() => handleRemoveMessage(id)}
        />
      ))}
    </Container>
  );
}
