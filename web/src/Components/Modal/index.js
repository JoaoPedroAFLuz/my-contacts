import { Button } from '../Button';

import { Container, Footer, Overlay } from './styles';

export function Modal() {
  return (
    <Overlay>
      <Container>
        <h1>Título</h1>
        <p>Mensagem</p>
        <Footer>
          <button type="button" className="cancelButton">Cancelar</button>
          <Button type="button">Deletar</Button>
        </Footer>
      </Container>
    </Overlay>

  );
}
