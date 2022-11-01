import PropTypes from 'prop-types';
import { useState, useRef } from 'react';

import { Button } from '../Button';
import { FormGroup } from '../FormGroup';
import { Input } from '../Input';
import { Select } from '../Select';

import { ButtonContainer, Form } from './styles';

export function ContactForm({ buttonLabel }) {
  const [nome, setNome] = useState('');

  const emailInput = useRef(null);

  function handleClick() {
    console.log(emailInput.current.value);
  }

  return (
    <Form>
      <button type="button" onClick={() => handleClick()}>
        Loga emailInput
      </button>

      <FormGroup>
        <Input
          value={nome}
          placeholder="Nome"
          name="name"
          onChange={(event) => setNome(event.target.value)}
        />
      </FormGroup>

      <FormGroup>
        <Input placeholder="E-mail" ref={emailInput} />
      </FormGroup>

      <FormGroup>
        <Input placeholder="Telefone" />
      </FormGroup>

      <FormGroup>
        <Select>
          <option>Faculdade</option>
          <option>Trabalho</option>
          <option>Instagram</option>
        </Select>
      </FormGroup>

      <ButtonContainer>
        <Button type="submit">{buttonLabel}</Button>
      </ButtonContainer>
    </Form>
  );
}

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
};
