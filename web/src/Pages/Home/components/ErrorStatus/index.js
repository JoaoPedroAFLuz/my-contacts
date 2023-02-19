import PropTypes from 'prop-types';

import { Button } from '../../../../Components/Button';

import sad from '../../../../Assets/Images/Icons/sad.svg';
import { Container } from './styles';

export function ErrorStatus({ onTryAgain }) {
  return (
    <Container>
      <img src={sad} alt="Sad icon" />

      <div className="details">
        <strong>Ocorreu um erro ao obter os seus contatos!</strong>

        <Button type="button" onClick={onTryAgain}>
          Tentar novamente
        </Button>
      </div>
    </Container>
  );
}

ErrorStatus.propTypes = {
  onTryAgain: PropTypes.func.isRequired,
};
