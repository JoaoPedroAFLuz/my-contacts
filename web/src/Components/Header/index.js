import { Container } from './styles';

import logo from '../../Assets/Images/logo.svg';

export function Header() {
  return (
    <Container>
      <img src={logo} alt="Logo" width="200" />

    </Container>
  );
}
