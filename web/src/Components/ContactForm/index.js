import PropTypes from 'prop-types';
import { useCallback, useState } from 'react';

import { Button } from '../Button';
import { FormGroup } from '../FormGroup';
import { Input } from '../Input';
import { Select } from '../Select';

import { isEmailValid } from '../../Utils/IsEmailValid';

import { ButtonContainer, Form } from './styles';
import { useErrors } from '../../Hooks/useErrors';
import { formatPhone } from '../../Utils/formatPhone';

export function ContactForm({ buttonLabel }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('');
  const { setError, removeError, getErrorMessageByFieldName } = useErrors();

  const handleNameChange = useCallback((event) => {
    const nameInputValue = event.target.value;
    setName(nameInputValue);

    if (!nameInputValue) {
      setError({ field: 'name', message: 'Nome é obrigatório' });
    } else {
      removeError({ field: 'name' });
    }
  });

  const handleEmailChange = useCallback((event) => {
    const emailInputValue = event.target.value;
    setEmail(emailInputValue);

    if (emailInputValue && !isEmailValid(emailInputValue)) {
      setError({ field: 'email', message: 'E-mail inválido' });
    } else {
      removeError({ field: 'email' });
    }
  });

  const handlePhoneChange = useCallback((event) =>
    setPhone(formatPhone(event.target.value))
  );

  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    console.log({
      nome: name,
      email,
      phone: phone.replace(/\D/g, ''),
      category,
    });
  });

  return (
    <Form onSubmit={handleSubmit} noValidate>
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
          type="email"
          onChange={handleEmailChange}
          error={getErrorMessageByFieldName('email')}
        />
      </FormGroup>

      <FormGroup>
        <Input
          value={phone}
          placeholder="Telefone"
          name="phone"
          type="tel"
          maxLength="16"
          onChange={handlePhoneChange}
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
