import PropTypes from 'prop-types';
import { Container } from './styles';

import checkCircleIcon from '../../../Assets/Images/Icons/check-circle.svg';
import xCircleIcon from '../../../Assets/Images/Icons/x-circle.svg';

export function ToastMessage({ text, type, onRemoveMessage }) {
  return (
    <Container type={type} onClick={onRemoveMessage}>
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
