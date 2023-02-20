import PropTypes from 'prop-types';

import { ReactPortal } from '../ReactPortal';
import { useAnimatedUnmount } from '../../Hooks/useAnimatedUnmount';

import { Spinner } from '../Spinner';
import { Overlay } from './styles';

export function Loader({ isLoading }) {
  const { shouldRender, animatedElementRef } = useAnimatedUnmount(isLoading);

  if (!shouldRender) {
    return null;
  }

  return (
    <ReactPortal containerId="loader-root">
      <Overlay isLeaving={!isLoading} ref={animatedElementRef}>
        <Spinner size={96} />
      </Overlay>
    </ReactPortal>
  );
}

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
