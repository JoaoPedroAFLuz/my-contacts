import PropTypes from 'prop-types';
import { useEffect } from 'react';

import checkCircleIcon from '../../../Assets/Images/Icons/check-circle.svg';
import xCircleIcon from '../../../Assets/Images/Icons/x-circle.svg';

import { Container } from './styles';

export function ToastMessage({
  message,
  animatedRef,
  isLeaving,
  onRemoveMessage,
}) {
  useEffect(() => {
    const timeOutId = setTimeout(onRemoveMessage, message.duration || 7000);

    return () => {
      clearTimeout(timeOutId);
    };
  }, [onRemoveMessage, message.duration]);

  return (
    <Container
      tabIndex={0}
      role="button"
      type={message.type}
      isLeaving={isLeaving}
      onClick={onRemoveMessage}
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

ToastMessage.propTypes = {
  message: PropTypes.shape({
    text: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['default', 'success', 'danger']),
    duration: PropTypes.number,
  }).isRequired,
  isLeaving: PropTypes.bool.isRequired,
  animatedRef: PropTypes.shape().isRequired,
  onRemoveMessage: PropTypes.func.isRequired,
};
