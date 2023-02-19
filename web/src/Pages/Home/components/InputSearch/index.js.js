import PropTypes from 'prop-types';

import { Container } from './styles';

export function InputSearch({ value, onChange }) {
  return (
    <Container>
      <input
        type="text"
        placeholder="Pesquise pelo nome ou e-mail..."
        value={value}
        onChange={onChange}
      />
    </Container>
  );
}

InputSearch.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
