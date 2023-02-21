import { useEffect } from 'react';
import { useAnimatedList } from '../../../Hooks/useAnimatedList';

import { toastEventManager } from '../../../Utils/toast';
import { ToastMessage } from '../ToastMessage';

import { Container } from './styles';

export function ToastContainer() {
  const {
    setItems: setMessages,
    renderList,
    handleRemoveItems,
    handleAnimationEnd,
  } = useAnimatedList();

  useEffect(() => {
    function handleAddToast({ type, text, duration }) {
      setMessages((prevState) => [
        ...prevState,
        { id: Math.random(), type, text, duration },
      ]);
    }

    toastEventManager.on('addtoast', handleAddToast);

    return () => {
      toastEventManager.removeListener('addtoast', handleAddToast);
    };
  }, [setMessages]);

  return (
    <Container>
      {renderList((message, { isLeaving }) => (
        <ToastMessage
          key={message.id}
          message={message}
          isLeaving={isLeaving}
          onRemoveMessage={() => handleRemoveItems(message.id)}
          onAnimationEnd={() => handleAnimationEnd(message.id)}
        />
      ))}
    </Container>
  );
}
