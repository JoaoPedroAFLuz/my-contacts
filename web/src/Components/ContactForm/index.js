import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import categoriesService from '../../Services/categoriesService';

import { useErrors } from '../../Hooks/useErrors';
import { formatPhone } from '../../Utils/formatPhone';
import { isEmailValid } from '../../Utils/IsEmailValid';

import { Button } from '../Button';
import { FormGroup } from '../FormGroup';
import { Input } from '../Input';
import { Select } from '../Select';

import { ButtonContainer, Form } from './styles';

export function ContactForm({ buttonLabel, onSubmit }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoadingCategories, setIsLoadingCategories] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [categories, setCategories] = useState([]);

  const { errors, setError, removeError, getErrorMessageByFieldName } =
    useErrors();

  useEffect(() => {
    async function getCategories() {
      try {
        setIsLoadingCategories(true);

        const categoriesList = await categoriesService.listCategories();

        setCategories(categoriesList);
      } catch {
      } finally {
        setIsLoadingCategories(false);
      }
    }

    getCategories();
  }, []);

  const isFormValid = name && errors.length === 0;

  function handleNameChange(event) {
    const nameInputValue = event.target.value;
    setName(nameInputValue);

    if (!nameInputValue) {
      setError({ field: 'name', message: 'Nome é obrigatório' });
    } else {
      removeError({ field: 'name' });
    }
  }

  function handleEmailChange(event) {
    const emailInputValue = event.target.value;
    setEmail(emailInputValue);

    if (emailInputValue && !isEmailValid(emailInputValue)) {
      setError({ field: 'email', message: 'E-mail inválido' });
    } else {
      removeError({ field: 'email' });
    }
  }

  function handlePhoneChange(event) {
    setPhone(formatPhone(event.target.value));
  }

  async function handleSubmit(event) {
    setIsSubmitting(true);
    event.preventDefault();

    const contact = {
      name,
      email,
      phone,
      categoryId,
    };

    await onSubmit(contact);

    setIsSubmitting(false);
  }

  return (
    <Form onSubmit={handleSubmit} noValidate>
      <FormGroup error={getErrorMessageByFieldName('name')}>
        <Input
          value={name}
          placeholder="Nome *"
          name="name"
          disabled={isSubmitting}
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
          disabled={isSubmitting}
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
          disabled={isSubmitting}
          onChange={handlePhoneChange}
        />
      </FormGroup>

      <FormGroup isLoading={isLoadingCategories}>
        <Select
          disabled={isLoadingCategories || isSubmitting}
          value={categoryId}
          onChange={(event) => setCategoryId(event.target.value)}
        >
          <option value="">Sem categoria</option>

          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </Select>
      </FormGroup>

      <ButtonContainer>
        <Button disabled={!isFormValid} isLoading={isSubmitting}>
          {buttonLabel}
        </Button>
      </ButtonContainer>
    </Form>
  );
}

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
