import PropTypes from 'prop-types';
import { forwardRef } from 'react';

import { useContactForm } from './useContactForm';

import { Button } from '../Button';
import { FormGroup } from '../FormGroup';
import { Input } from '../Input';
import { Select } from '../Select';
import { ButtonContainer, Form } from './styles';

export const ContactForm = forwardRef(({ buttonLabel, onSubmit }, ref) => {
  const {
    name,
    email,
    phone,
    categoryId,
    categories,
    isSubmitting,
    isLoadingCategories,
    isFormValid,
    handleNameChange,
    handleEmailChange,
    handlePhoneChange,
    setCategoryId,
    getErrorMessageByFieldName,
    handleSubmit,
  } = useContactForm({ ref, onSubmit });

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

      <FormGroup error={getErrorMessageByFieldName('phone')}>
        <Input
          value={phone}
          placeholder="Telefone"
          name="phone"
          type="tel"
          maxLength="15"
          disabled={isSubmitting}
          onChange={handlePhoneChange}
          error={getErrorMessageByFieldName('phone')}
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
});

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
