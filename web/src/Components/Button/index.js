import PropTypes from 'prop-types';

import { Spinner } from '../Spinner';

import { Button as StyledButton } from './styles';

export function Button({
  children,
  disabled,
  isLoading,
  type,
  danger,
  onClick,
}) {
  return (
    <StyledButton
      type={type}
      disabled={disabled || isLoading}
      danger={danger}
      onClick={onClick}
    >
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
  danger: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  disabled: false,
  isLoading: false,
  type: 'submit',
  danger: false,
  onClick: undefined,
};
