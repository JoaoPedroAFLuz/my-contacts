import PropTypes from 'prop-types';

import { FormGroup } from '../FormGroup';

import { Input } from '../Input';
import { Select } from '../Select';
import { Button } from '../Button';

import { ButtonContainer, Form } from './styles';

export function ContactForm({ buttonLabel }) {
  return (
    <Form>
      <FormGroup>
        <Input placeholder="Nome" name="name" />
      </FormGroup>

      <FormGroup error="O formato do e-mail é inválido">
        <Input placeholder="E-mail" error />
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
