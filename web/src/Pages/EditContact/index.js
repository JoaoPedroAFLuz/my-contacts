import { useEditContact } from './useEditContact';

import { ContactForm } from '../../Components/ContactForm';
import { Loader } from '../../Components/Loader';
import { PageHeader } from '../../Components/PageHeader/index';

export function EditContact() {
  const { contactName, contactFormRef, isLoading, handleSubmit } =
    useEditContact();

  return (
    <>
      <Loader isLoading={isLoading} />

      <PageHeader
        title={isLoading ? 'Carregando...' : `Editar ${contactName}`}
      />

      <ContactForm
        buttonLabel="Salvar alterações"
        ref={contactFormRef}
        onSubmit={handleSubmit}
      />
    </>
  );
}
