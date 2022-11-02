import { Link } from 'react-router-dom';

import { Container } from './styles';

import logo from '../../Assets/Images/logo.svg';

export function Header() {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Logo" width="200" />
      </Link>
    </Container>
  );
}
