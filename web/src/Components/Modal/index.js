import PropTypes from 'prop-types';

import { Button } from '../Button';

import { Container, Footer, Overlay } from './styles';

export function Modal({ danger }) {
  return (
    <Overlay>
      <Container danger={danger}>
        <h1>Título</h1>
        <p>Mensagem</p>
        <Footer>
          <button type="button" className="cancelButton">
            Cancelar
          </button>
          <Button type="button" danger={danger}>
            Deletar
          </Button>
        </Footer>
      </Container>
    </Overlay>
  );
}

Modal.propTypes = {
  danger: PropTypes.bool,
};

Modal.defaultProps = {
  danger: false,
};
