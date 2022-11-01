import { Container, InputSearchContainer } from './styles';

import logo from '../../Assets/Images/logo.svg';

export function Header() {
  return (
    <Container>
      <img src={logo} alt="Logo" width="200" />

      <InputSearchContainer>
        <input type="text" placeholder="Pesquise pelo nome..." />
      </InputSearchContainer>
    </Container>
  );
}
