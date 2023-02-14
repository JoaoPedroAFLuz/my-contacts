import PropTypes from 'prop-types';
import { useEffect } from 'react';

import checkCircleIcon from '../../../Assets/Images/Icons/check-circle.svg';
import xCircleIcon from '../../../Assets/Images/Icons/x-circle.svg';

import { Container } from './styles';

export function ToastMessage({ text, type, onRemoveMessage }) {
  useEffect(() => {
    function removeMessage() {
      setTimeout(onRemoveMessage, 3000);
    }

    removeMessage();
  }, [onRemoveMessage]);

  return (
    <Container type={type} onClick={onRemoveMessage} tabIndex={0} role="button">
      {type === 'success' && <img src={checkCircleIcon} alt="Success icon" />}
      {type === 'error' && <img src={xCircleIcon} alt="Error icon" />}
      <strong>{text}</strong>
    </Container>
  );
}

ToastMessage.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['default', 'success', 'error']),
  onRemoveMessage: PropTypes.func.isRequired,
};

ToastMessage.defaultProps = {
  type: 'default',
};
