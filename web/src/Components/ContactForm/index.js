import PropTypes from 'prop-types';
import { useCallback, useState } from 'react';

import { Button } from '../Button';
import { FormGroup } from '../FormGroup';
import { Input } from '../Input';
import { Select } from '../Select';

import { isEmailValid } from '../../Utils/IsEmailValid';

import { ButtonContainer, Form } from './styles';

export function ContactForm({ buttonLabel }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('');
  const [errors, setErrors] = useState([]);

  const handleNameChange = useCallback((event) => {
    setName(event.target.value);

    if (!event.target.value) {
      setErrors((prevState) => [
        ...prevState,
        {
          field: 'name',
          message: 'Nome é obrigatório',
        },
      ]);
    } else {
      setErrors((prevState) =>
        prevState.filter((error) => error.field !== 'name')
      );
    }
  });

  const handleEmailChange = useCallback((event) => {
    const emailInput = event.target.value;
    setEmail(emailInput);

    if (emailInput && !isEmailValid(emailInput)) {
      const errorAlreadyExists = errors.some(
        (error) => error.field === 'email'
      );

      if (errorAlreadyExists) {
        return;
      }

      setErrors((prevState) => [
        ...prevState,
        { field: 'email', message: 'E-mail inválido' },
      ]);
    } else {
      setErrors((prevState) =>
        prevState.filter((error) => error.field !== 'email')
      );
    }
  });

  const getErrorMessageByFieldName = (fieldName) =>
    errors.find((error) => error.field === fieldName)?.message;

  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    console.log({
      nome: name,
      email,
      phone,
      category,
    });
  });

  console.log(getErrorMessageByFieldName('name'));

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup error={getErrorMessageByFieldName('name')}>
        <Input
          value={name}
          placeholder="Nome"
          name="name"
          onChange={handleNameChange}
          error={getErrorMessageByFieldName('name')}
        />
      </FormGroup>

      <FormGroup error={getErrorMessageByFieldName('email')}>
        <Input
          value={email}
          placeholder="E-mail"
          name="e-mail"
          onChange={handleEmailChange}
          error={getErrorMessageByFieldName('email')}
        />
      </FormGroup>

      <FormGroup>
        <Input
          value={phone}
          placeholder="Telefone"
          name="phone"
          onChange={(event) => setPhone(event.target.value)}
        />
      </FormGroup>

      <FormGroup>
        <Select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value="">Categoria</option>
          <option value="Faculdade">Faculdade</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Instagram">Instagram</option>
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
