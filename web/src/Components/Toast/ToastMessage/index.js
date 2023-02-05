import PropTypes from 'prop-types';
import { Container } from './styles';

import checkCircleIcon from '../../../Assets/Images/Icons/check-circle.svg';
import xCircleIcon from '../../../Assets/Images/Icons/x-circle.svg';

export function ToastMessage({ text, type }) {
  return (
    <Container type={type}>
      {type === 'success' && <img src={checkCircleIcon} alt="Success icon" />}
      {type === 'error' && <img src={xCircleIcon} alt="Error icon" />}
      <strong>{text}</strong>
    </Container>
  );
}

ToastMessage.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['default', 'success', 'error']),
};

ToastMessage.defaultProps = {
  type: 'default',
};
