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

      <FormGroup>
        <Input placeholder="E-mail" />
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
