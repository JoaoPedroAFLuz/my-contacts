import { useState } from 'react';

export function useErrors() {
  const [errors, setErrors] = useState([]);

  function setError({ field, message }) {
    const errorAlreadyExists = errors.some((error) => error.field === field);

    if (errorAlreadyExists) {
      return;
    }

    setErrors((prevState) => [
      ...prevState,
      {
        field,
        message,
      },
    ]);
  }

  function removeError({ field }) {
    setErrors((prevState) =>
      prevState.filter((error) => error.field !== field)
    );
  }

  const getErrorMessageByFieldName = (fieldName) =>
    errors.find((error) => error.field === fieldName)?.message;

  return {
    errors,
    setError,
    removeError,
    getErrorMessageByFieldName,
  };
}
