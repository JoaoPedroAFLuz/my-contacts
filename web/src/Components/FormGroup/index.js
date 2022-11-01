import PropTypes from 'prop-types';

import { Container } from './sytles';

export function FormGroup({ children }) {
  return <Container>{children}</Container>;
}

FormGroup.propTypes = {
  children: PropTypes.node.isRequired,
};
