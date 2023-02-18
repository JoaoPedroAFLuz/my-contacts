import PropTypes from 'prop-types';

import { ReactPortal } from '../ReactPortal';

import { Spinner } from '../Spinner';
import { Overlay } from './styles';

export function Loader({ isLoading }) {
  if (!isLoading) {
    return null;
  }

  return (
    <ReactPortal containerId="loader-root">
      <Overlay>
        <Spinner size={96} />
      </Overlay>
    </ReactPortal>
  );
}

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
