import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import { Button } from '../Button';
import { ReactPortal } from '../ReactPortal';

import { Container, Footer, Overlay } from './styles';

export function Modal({
  visible,
  title,
  cancelLabel,
  confirmLabel,
  danger,
  isLoading,
  onCancel,
  onConfirm,
  children,
}) {
  const [shouldRender, setShouldRender] = useState(visible);

  useEffect(() => {
    if (visible) {
      setShouldRender(true);
    }

    let timeoutId;

    if (!visible) {
      timeoutId = setTimeout(() => setShouldRender(false), 300);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [visible]);

  if (!shouldRender) {
    return null;
  }

  return (
    <ReactPortal containerId="modal-root">
      <Overlay isLeaving={!visible}>
        <Container danger={danger} isLeaving={!visible}>
          <h1>{title}</h1>

          <div className="modal-body">{children}</div>

          <Footer>
            <button
              type="button"
              className="cancelButton"
              disabled={isLoading}
              onClick={onCancel}
            >
              {cancelLabel}
            </button>

            <Button
              type="button"
              danger={danger}
              onClick={onConfirm}
              isLoading={isLoading}
            >
              {confirmLabel}
            </Button>
          </Footer>
        </Container>
      </Overlay>
    </ReactPortal>
  );
}

Modal.propTypes = {
  visible: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  cancelLabel: PropTypes.string,
  confirmLabel: PropTypes.string,
  danger: PropTypes.bool,
  isLoading: PropTypes.bool,
  onCancel: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

Modal.defaultProps = {
  danger: false,
  isLoading: true,
  cancelLabel: 'Cancelar',
  confirmLabel: 'Confirmar',
};
