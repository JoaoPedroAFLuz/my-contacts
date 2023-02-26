import PropTypes from 'prop-types';
import { memo, useEffect } from 'react';

import checkCircleIcon from '../../../Assets/Images/Icons/check-circle.svg';
import xCircleIcon from '../../../Assets/Images/Icons/x-circle.svg';

import { Container } from './styles';

function ToastMessageComponent({
  message,
  animatedRef,
  isLeaving,
  onRemoveMessage,
}) {
  useEffect(() => {
    const timeOutId = setTimeout(() => {
      onRemoveMessage(message.id);
    }, message.duration || 7000);

    return () => {
      clearTimeout(timeOutId);
    };
  }, [onRemoveMessage, message]);

  function handleRemoveToast() {
    onRemoveMessage(message.id);
  }

  return (
    <Container
      tabIndex={0}
      role="button"
      type={message.type}
      isLeaving={isLeaving}
      onClick={handleRemoveToast}
      ref={animatedRef}
    >
      {message.type === 'success' && (
        <img src={checkCircleIcon} alt="Success icon" />
      )}
      {message.type === 'danger' && <img src={xCircleIcon} alt="Error icon" />}
      <strong>{message.text}</strong>
    </Container>
  );
}

ToastMessageComponent.propTypes = {
  message: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['default', 'success', 'danger']),
    duration: PropTypes.number,
  }).isRequired,
  isLeaving: PropTypes.bool.isRequired,
  animatedRef: PropTypes.shape().isRequired,
  onRemoveMessage: PropTypes.func.isRequired,
};

export const ToastMessage = memo(ToastMessageComponent);
