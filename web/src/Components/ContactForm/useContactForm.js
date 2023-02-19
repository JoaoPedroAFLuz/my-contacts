import { useEffect, useImperativeHandle, useState } from 'react';

import categoriesService from '../../Services/categoriesService';

import { useErrors } from '../../Hooks/useErrors';
import { useSafeAsyncState } from '../../Hooks/useSafeAsyncState';
import { formatPhone } from '../../Utils/formatPhone';
import { isEmailValid } from '../../Utils/IsEmailValid';
import { isPhoneValid } from '../../Utils/isPhoneValid';

export function useContactForm({ ref, onSubmit }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoadingCategories, setIsLoadingCategories] = useSafeAsyncState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [categories, setCategories] = useSafeAsyncState([]);

  const { errors, setError, removeError, getErrorMessageByFieldName } =
    useErrors();

  useImperativeHandle(
    ref,
    () => ({
      setFieldsValues: (contact) => {
        setName(contact.name ?? '');
        setEmail(contact.email ?? '');
        setPhone(formatPhone(contact.phone ?? ''));
        setCategoryId(contact.category.id ?? '');
      },
      resetFields: () => {
        setName('');
        setEmail('');
        setPhone('');
        setCategoryId('');
      },
    }),
    []
  );

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
  }, [setCategories, setIsLoadingCategories]);

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
    const phoneInputValue = event.target.value;
    const formattedPhone = formatPhone(phoneInputValue);

    setPhone(formattedPhone);

    if (formattedPhone && !isPhoneValid(formattedPhone)) {
      setError({
        field: 'phone',
        message: 'Número inválido',
      });
    } else {
      removeError({ field: 'phone' });
    }
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

  return {
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
  };
}
