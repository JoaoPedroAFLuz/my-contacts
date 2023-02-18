import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import { Button } from '../Button';

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
  if (!visible) {
    return null;
  }

  return ReactDOM.createPortal(
    <Overlay>
      <Container danger={danger}>
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
    </Overlay>,
    document.getElementById('modal-root')
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
