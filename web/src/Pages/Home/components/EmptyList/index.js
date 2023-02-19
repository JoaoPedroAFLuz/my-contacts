import { Container } from './styles';

import emptyBox from '../../../../Assets/Images/Icons/empty-box.svg';

export function EmptyList() {
  return (
    <Container>
      <img src={emptyBox} alt="Empty box" />

      <p>
        Você ainda não tem nenhum contato cadastrado!
        <br />
        Clique no botão <strong> ”Novo contato”</strong> à cima
        <br />
        para cadastrar o seu primeiro!
      </p>
    </Container>
  );
}
