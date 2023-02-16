import PropTypes from 'prop-types';

import { Spinner } from '../Spinner';

import { Button as StyledButton } from './styles';

export function Button({ children, disabled, isLoading, type }) {
  return (
    <StyledButton type={type} disabled={disabled || isLoading}>
      {!isLoading && children}
      {isLoading && <Spinner />}
    </StyledButton>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  type: PropTypes.string,
};

Button.defaultProps = {
  disabled: false,
  isLoading: false,
  type: 'submit',
};
