import { useNewContact } from './useNewContact';

import { ContactForm } from '../../Components/ContactForm';
import { PageHeader } from '../../Components/PageHeader';

export function NewContact() {
  const { contactFormRef, handleSubmit } = useNewContact();

  return (
    <>
      <PageHeader title="Novo Contato" />

      <ContactForm
        buttonLabel="Cadastrar"
        ref={contactFormRef}
        onSubmit={handleSubmit}
      />
    </>
  );
}
