import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import { Button } from '../Button';

import { Container, Footer, Overlay } from './styles';

export function Modal({
  title,
  cancelLabel,
  confirmLabel,
  danger,
  onCancel,
  onConfirm,
  children,
}) {
  return ReactDOM.createPortal(
    <Overlay>
      <Container danger={danger}>
        <h1>{title}</h1>

        <div className="modal-body">{children}</div>

        <Footer>
          <button type="button" className="cancelButton" onClick={onCancel}>
            {cancelLabel}
          </button>

          <Button type="button" danger={danger} onClick={onConfirm}>
            {confirmLabel}
          </Button>
        </Footer>
      </Container>
    </Overlay>,
    document.getElementById('modal-root')
  );
}

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  cancelLabel: PropTypes.string,
  confirmLabel: PropTypes.string,
  danger: PropTypes.bool,
  onCancel: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

Modal.defaultProps = {
  danger: false,
  cancelLabel: 'Cancelar',
  confirmLabel: 'Confirmar',
};
